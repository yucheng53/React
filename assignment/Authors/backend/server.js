const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(cors());

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended:true}));

require("./server/routes/authors.routes")(app);

app.listen(port, () => console.log(`Running on port ${port}`));