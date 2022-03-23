const ProductController = require("../controllers/product.controller");

module.exports = app => {
    app.get("/api/products", ProductController.findAllProducts);
    app.post("/api/product/new", ProductController.createNewProduct);
    app.get("/product/:_id", ProductController.getOne )
}