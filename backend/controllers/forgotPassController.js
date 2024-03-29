const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const forgotPassEmail = require("../helpers/forgotPassEmail");
const forgotPassTemplate = require("../helpers/forgotPassTemplate");

const forgotPassController = async (req, res) => {
  const { email } = req.body;
  const existingUser = await User.find({ email });

  if (existingUser.length > 0) {
    jwt.sign({ email: email }, "AxmaH7vSa8", async function (err, token) {
      const forgotPass = await User.findOneAndUpdate(
        { email },
        { $set: { token: token } },
        { new: true }
      );
      await forgotPass.save();
      forgotPassEmail(token, email, forgotPassTemplate);
      return res.status(200).send({ message: "Reset link send to your email" });
    });
  } else {
    return res
      .status(401)
      .send({ error: "Your are not registered, Please Signup !" });
  }
};

module.exports = forgotPassController;
