const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./controller");

const db = require("../database/index");
const app = express();

app.get("/reviews", controller.get);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client/dist")));

module.exports = app;
