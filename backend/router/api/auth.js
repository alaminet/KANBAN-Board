const express = require("express");
const singupController = require("../../controllers/signupController");
const matchEmailController = require("../../controllers/matchEmailController");
const route = express.Router();

route.post("/registration", singupController);
route.post("/matchemail", matchEmailController);

module.exports = route;
