const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./Router/user");
require("./DB/contection")

app.listen(5000);

// @Middleware
app.use(express.json());
app.use(cors());

// @Route
app.use('/user', routes);


// app.get('/', (req, res) => {
//     res.send("Hello")
// })

// app.post('/', (req, res) => {
//     res.json(req.body);
// })