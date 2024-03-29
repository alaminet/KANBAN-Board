const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const matchForgotPassController = async (req, res) => {
  const { token, password } = req.body;
  var decoded = jwt.verify(token, "AxmaH7vSa8");
  const existingUser = await User.find({ email: decoded.email });
  if (existingUser.length > 0) {
    bcrypt.hash(password, 10, async function (err, hash) {
      const updatePass = await User.findOneAndUpdate(
        { email: decoded.email },
        { $set: { password: hash, token: "", verify: true } },
        { new: true }
      );
      await updatePass.save();
      return res
        .status(200)
        .send({ message: "Update Your Passwor, Please Login!" });
    });
  } else {
    return res
      .status(401)
      .send({ error: "Not updated, Please Resend again !" });
  }
};

module.exports = matchForgotPassController;
