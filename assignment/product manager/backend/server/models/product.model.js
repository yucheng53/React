const { text } = require("express");
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "There must be a title"]
    },
    price: {
        type: Number,
        required: [true, "There must be a price"]
    },
    description: {
        type: String
    }
},{timestamps: true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;