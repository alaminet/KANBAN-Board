const express = require("express");
const route = express.Router();

route.post("/registration", (req, res) => {
  res.send("auth route");
});

module.exports = route;