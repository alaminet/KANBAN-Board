const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const otpGenerator = require("otp-generator");
const otpEmail = require("../helpers/otpEmail");
const otpMailTemplate = require("../helpers/otpMailTemplate");

const singupController = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.send({ error: "Please fill the all filed" });
  }

  if (password && password.length < 6) {
    return res.status(401).send({ error: "Password to small" });
  }

  const existingUser = await User.find({ email: email });

  if (existingUser.length > 0) {
    return res.status(401).send({ error: `${email} already Used` });
  } else {
    bcrypt.hash(password, 10, async function (err, hash) {
      const otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        specialChars: false,
        lowerCaseAlphabets: false,
      });
      jwt.sign({ email: email }, "AxmaH7vSa8", async function (err, token) {
        const user = await new User({
          name: name,
          email: email,
          password: hash,
          otp: otp,
          token: token,
        });
        await user.save();

        otpEmail(token, otp, email, otpMailTemplate);
        return res
          .status(200)
          .send({ message: "Registration Successfull, Check your email" });
      });
    });
  }
};

module.exports = singupController;
