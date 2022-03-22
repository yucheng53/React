const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
    setup:{
        type: String,
        require: [true, "Setup is required"],
        minlength: [3, "Setup must be at least 5 characters long"]
    },
    punchline:{
        type: String,
        require: [true, "Setup is required"],
        minlength: [3, "Setup must be at least 5 characters long"]
    }
})

const Joke = mongoose.model("Joke", JokesSchema);

module.exports = Joke;