const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require("../models/products.model");

/**
 * GET /products
 * @summary get all products
 * @tags products
 * @param {string} search.query - search products by name
 * @param {string} sort.query - cheap or expensive
 * @return {object} 200 - success response
 * @return {object} 401 - not found response 
 */
function getProducts(req, res){
    const {search='', sort=''} = req.query;
    let results = getAllProducts(search);

    if (sort === 'cheap') {
        results = results.sort((a, b) => a.price - b.price);
    } else if (sort === 'expensive') {
        results = results.sort((a, b) => b.price - a.price);
    }

    if(results.length < 1){
        res.status(401).json({
            success: false,
            message: "product not products"
        });
        return;
    }

    res.status(200).json({
        success: true,
        message: "list all products",
        results
    });
}

/**
 * GET /products/{id}
 * @summary get product by id
 * @param {string} id.path - id product
 * @tags products
 * @returns {object} 200 - success response
 */
function getProduct(req, res){
    const id = parseInt(req.params.id);
    const result = getProductById(id);

    if (!result){
        return res.status(400).json({
            success: false,
            message: "product not found",
        });
    }

    res.status(200).json({
        success: true,
        message: "product found",
        results: result
    });
}

/**
 * POST /products
 * @summary create product
 * @tags products
 * @param {object} request.body.required - Product data
 * @example request - example payload
 * {
 *   "name": "soto",
 *   "price": 25000
 * }
 * @returns {object} 200 - success response
 */
function create(req, res){
    const { name, price } = req.body;
    const newProduct = createProduct(name, price);

    res.status(200).json({
        success: true,
        message: "create product success",
        results: newProduct
    });
}

/**
 * PUT /products/{id}
 * @summary update product
 * @tags products
 * @param {number} id.path.required - product id
 * @param {object} request.body.required - product data to update
 * @example request - example payload
 * {
 *   "name": "matcha latte",
 *   "price": 30000
 * }
 * @returns {object} 200 - success response
 * @returns {object} 400 - product update error
 */
function update(req, res){
    const id = parseInt(req.params.id);
    const { name, price } = req.body;

    const updated = updateProduct(id, name, price);

    if (!updated){
        return res.status(400).json({
            success: false,
            message: "product update error"
        });
    }

    res.status(200).json({
        success: true,
        message: "product updated successfully",
        results: updated
    });
}

/**
 * DELETE /products/{id}
 * @summary delete product
 * @tags products
 * @param {number} id.path.required - product id
 * @returns {object} 200 - success response
 * @returns {object} 400 - product not found
 */
function remove(req, res){
    const id = parseInt(req.params.id);
    const deleted = deleteProduct(id);

    if (!deleted){
        return res.status(400).json({
            success: false,
            message: "product not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "product deleted"
    });
}

module.exports = {
    getProducts,
    getProduct,
    create,
    update,
    remove
};
