const Author = require("../models/authors.model");

module.exports.findAllAuthors = (req, res) => {
    Author.find({}).sort({name : 1})
        .then((results) => res.json(results))
        .catch(err => res.status(400).json({message: "Not working", err}))
}

module.exports.createNewAuthor = (req, res) => {
    Author.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "That didn't work", err}))
}

module.exports.getOne = (req, res) => {
    Author.findOne({_id: req.params._id})
        .then((results) => res.json(results))
        .catch(err => res.status(400).json({message: "Not working", err}))
}

module.exports.deleteOne = (req, res) => {
    Author.deleteOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "That didn't work", err}))
}

module.exports.updateOne = (req, res) => {
    Author.updateOne({_id: req.params._id}, req.body,{ runValidators: true })
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "That didn't work", err}))
}

module.exports.addBook = (req, res) => {
    Author.updateOne({_id: req.params._id}, {$push: {books: req.body.book}})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: "That didn't work", err}))
}