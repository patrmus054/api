require("dotenv").config();
require("./models/Registration");
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE, {});
mongoose.Promise = global.Promise;
mongoose.connection
  .on("connected", () => {
    console.log(`Mongoose connection open on ${process.env.DATABASE}`);
  })
  .on("error", err => {
    console.log(`Connection error: ${err.message}`);
  });

const app = require("./app");

const server = app.listen(process.env.PORT || 3001, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
