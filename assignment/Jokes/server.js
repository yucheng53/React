const express = require("express");
const app = express();
const port = 8000;

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended:true}));  //for POSt

require("./server/routes/jokes.routes")(app);
// const AllMyJokesRoutes = require("./server/routes/jokes.routes");
// AllMyJokesRoutes(app);

app.listen(port,() => console.log(`runing on port ${port}`));