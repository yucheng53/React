const Joke = require("../models/jokes.model");
var random = require('mongoose-random');

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
    //call find put in a variable allJokes
    //make a random number with Math.random and useallJokes.length
    //return allJokes[random]
    const Jokes = Joke.find({})
    const random = Math.floor(Math.random() * Jokes.length);
        console.log(random);
        return Jokes[random]
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "That didn't work", err}))
    // const random = Math.floor(Math.random() * Jokkes.length)
    // return Jokkes[random];
}