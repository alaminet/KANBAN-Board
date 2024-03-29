const express = require("express");
const singupController = require("../../controllers/signupController");
const matchEmailController = require("../../controllers/matchEmailController");
const matchOtpController = require("../../controllers/matchOtpController");
const loginController = require("../../controllers/loginController");
const route = express.Router();

route.post("/registration", singupController);
route.post("/matchemail", matchEmailController);
route.post("/matchotp", matchOtpController);
route.post("/login", loginController);

module.exports = route;
