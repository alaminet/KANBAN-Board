const express = require("express");
const singupController = require("../../controllers/signupController");
const matchEmailController = require("../../controllers/matchEmailController");
const matchOtpController = require("../../controllers/matchOtpController");
const route = express.Router();

route.post("/registration", singupController);
route.post("/matchemail", matchEmailController);
route.post("/matchotp", matchOtpController);

module.exports = route;
