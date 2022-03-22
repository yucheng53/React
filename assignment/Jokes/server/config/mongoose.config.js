const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokes", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("You are connected to the database"))
    .catch(err=>console.log("Db is not working", err));
