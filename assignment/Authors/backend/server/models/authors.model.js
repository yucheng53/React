const { text } = require("express");
const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "There must be a name"],
        minlength: [3, "Author name must be at least 3 characters long"],
        validate:{
            validator: (input)=> {return !input.toUpperCase().includes("CHENG")},
            message:"Death to Cheng" 
            }
    },

    color : {
        type: String,
    },

    active: {
        type: Boolean,
        default: false
    },

    numOfRewards : {
        type: Number,
        min: [1, "you need to have at least 1 reward"]
    },

    foreign : {
        type: Boolean,
        required: [true, "Foreign or not?"],
        default: false
    },

    books: [String] 
},{timestamps: true})

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;