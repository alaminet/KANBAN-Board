const express = require("express");
const singupController = require("../../controllers/signupController");
const matchEmailController = require("../../controllers/matchEmailController");
const matchOtpController = require("../../controllers/matchOtpController");
const loginController = require("../../controllers/loginController");
const reVerifyController = require("../../controllers/reVerifyController");
const forgotPassController = require("../../controllers/forgotPassController");
const matchForgotPassController = require("../../controllers/matchForgotPassController");

const route = express.Router();

route.post("/registration", singupController);
route.post("/matchemail", matchEmailController);
route.post("/matchotp", matchOtpController);
route.post("/login", loginController);
route.post("/reverify", reVerifyController);
route.post("/forgotpass", forgotPassController);
route.post("/matchpass", matchForgotPassController);

module.exports = route;
