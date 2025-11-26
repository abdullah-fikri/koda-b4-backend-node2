let idProducts = 1;
const products = [
    {
        id: idProducts++,
        picture: null,
        name: "nasgor",
        price: 20000
    }, 
    {
        id: idProducts++,
        picture: null,
        name: "mie",
        price: 1000
    }
];

// get all
function getAllProducts(name){
    return products.filter(item => item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
}

// get by id
function getProductById(id){
    return products.filter(it => it.id === id);  
}

// create
function createProduct(name, price){
    const newProduct = {
        id: idProducts++,
        name,
        price
    };
    products.push(newProduct);
    return newProduct;
}

// update
function updateProduct(id, name, price, picture){
    const index = products.findIndex(item => item.id === id);
    if (index === -1) return null;

    name ? products[index].name = name : products[index].name
    price ? products[index].price = price : products[index].price
    picture ? products[index].picture = picture : products[index].picture
    return products[index];
}

// delete
function deleteProduct(id){
    const index = products.findIndex(it => it.id === id);
    if (index === -1) return false;

    products.splice(index, 1);
    return true;
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};
