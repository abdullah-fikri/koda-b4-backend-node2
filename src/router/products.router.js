const router = require("express").Router();
const products = require("../controllers/products.controller");

router.get("/products", products.getProducts);
router.get("/products/:id", products.getProduct);
router.post("/products", products.create);
router.patch("/products/:id", products.update);
router.delete("/products/:id", products.remove);

module.exports = router;
