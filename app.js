const express = require("express");
const path = require("path");
const routes = require("./routes/index");

const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use("/", routes);

module.exports = app;
