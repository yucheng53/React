const authorsController = require("../controllers/authors.controller");

module.exports = app => {
    app.get("/api/authors", authorsController.findAllAuthors);
    app.post("/api/author/new", authorsController.createNewAuthor);
    app.get("/author/:_id", authorsController.getOne );
    app.delete("/api/authors/delete/:_id", authorsController.deleteOne);
    app.patch("/api/authors/update/:_id", authorsController.updateOne);
    app.put("/api/authors/addBook/:_id", authorsController.addBook);
}