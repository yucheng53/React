const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/authors", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to the db"))
    .catch(err => console.log("Db is not working", err));
