const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require("../models/products.model");

function getProducts(req, res){
    const results = getAllProducts();
    res.status(200).json({
        success: true,
        message: "list all products",
        results
    });
}

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

function create(req, res){
    const { name, price } = req.body;
    const newProduct = createProduct(name, price);

    res.status(200).json({
        success: true,
        message: "create product success",
        results: newProduct
    });
}

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
