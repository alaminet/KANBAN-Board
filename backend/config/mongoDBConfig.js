const mongoose = require("mongoose");

const mongoDBConfig = () => {
  mongoose
    .connect(process.env.mongodbURL)
    .then(() => console.log("mongoDB Connected"));
};

module.exports = mongoDBConfig;
