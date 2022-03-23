const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
    setup:{
        type: String,
        required: [true, "Setup is required"],
        minlength: [3, "Setup must be at least 3 characters long"]
    },
    punchline:{
        type: String,
        required: [true, "Setup is required"],
        minlength: [3, "Setup must be at least 3 characters long"]
    }
},{timestamps: true})

const Joke = mongoose.model("Joke", JokesSchema);

module.exports = Joke;