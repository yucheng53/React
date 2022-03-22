const JokesController = require("../controllers/jokes.controller");

module.exports = app => {
    app.get("/api/test", JokesController.testResponse);
    app.get("/api/jokes", JokesController.findAllJokes);
    app.post("/api/jokes/new", JokesController.createNewJoke);
    app.get("/api/jokes/:_id", JokesController.findOneJoke);
    app.delete("/api/jokes/delete/:_id", JokesController.deleteOneJoke);
    app.put("/api/jokes/update/:_id", JokesController.updateOneJoke);
    app.get("/api/jokes/random", JokesController.getRandomJoke)
}