const Product = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
    Product.find({})
        .then((results) => res.json(results))
        .catch(err => res.status(400).json({message: "Not working", err}))
}

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "That didn't work", err}))
}

module.exports.getOne = (req, res) => {
    Product.findOne({_id: req.params._id})
        .then((results) => res.json(results))
        .catch(err => res.status(400).json({message: "Not working", err}))
}