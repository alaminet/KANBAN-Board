const express = require("express");
const singupController = require("../../controllers/signupController");
const route = express.Router();

route.post("/registration", singupController);

module.exports = route;
