const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./controller");

const db = require("../database/index");
const app = express();
const port = 2000;

app.get("/reviews", controller.get);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client/dist")));

app.listen(port, () => console.log(`listening on port ${port}!`));

// module.exports = db
