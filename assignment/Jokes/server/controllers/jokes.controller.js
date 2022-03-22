const Joke = require("../models/jokes.model");

module.exports.testResponse = (req, res) => {
    res.json({message: "test response!"})
}

module.exports.findAllJokes = (req, res) => {
    Joke.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "That didn't work", err}))
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "That didn't work", err}))
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "That didn't work", err}))
}

module.exports.deleteOneJoke = (req, res) => {
    Joke.deleteOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "That didn't work", err}))
}

module.exports.updateOneJoke = (req, res) => {
    Joke.updateOne({_id: req.params._id}, req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "That didn't work", err}))
}

module.exports.getRandomJoke = (req, res) => {
    Joke.aggregate([{$sample: {size: 1}}])
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "That didn't work", err}))
}