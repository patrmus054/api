const mongoose = require("mongoose");

const dbUrl =
  "mongodb+srv://patryk:123456!@cluster0-gjizc.azure.mongodb.net/test?retryWrites=true&w=majority";

const db = () => {
  mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("happpppppppp");
};

module.exports = db;

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://patryk:123456!@cluster0-gjizc.azure.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true
// });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
