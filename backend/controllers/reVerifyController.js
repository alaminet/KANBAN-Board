const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const otpEmail = require("../helpers/otpEmail");
const otpMailTemplate = require("../helpers/otpMailTemplate");

const reVerifyController = async (req, res) => {
  const { email } = req.body;
  const existingUser = await User.find({ email });

  if (existingUser.length > 0) {
    if (!existingUser[0].verify) {
      const otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        specialChars: false,
        lowerCaseAlphabets: false,
      });
      jwt.sign({ email: email }, "AxmaH7vSa8", async function (err, token) {
        const reverify = await User.findOneAndUpdate(
          { email },
          { $set: { otp: otp, token: token } },
          { new: true }
        );
        await reverify.save();

        otpEmail(token, otp, email, otpMailTemplate);
        return res
          .status(200)
          .send({ message: "Verification Link Send to your email" });
      });
    } else {
      return res
        .status(401)
        .send({ error: "Your are not Verified, Please login !" });
    }
  } else {
    return res
      .status(401)
      .send({ error: "Your are not registered, Please Signup !" });
  }
};

module.exports = reVerifyController;
