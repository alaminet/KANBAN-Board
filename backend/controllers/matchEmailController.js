const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

const matchEmailController = async (req, res) => {
  const { email, token } = req.body;
  const existingUser = await User.find({ email });
  var decoded = jwt.verify(token, "AxmaH7vSa8");

  if (existingUser.length > 0) {
    if (existingUser[0].email === decoded.email && !existingUser[0].verify) {
      const emailVerify = await User.findOneAndUpdate(
        { email },
        { $unset: { otp: "", token: "" }, $set: { verify: true } },
        { new: true }
      );
      await emailVerify.save();
      return res
        .status(200)
        .send({ message: "Successfully Verified, Please Login" });
    } else {
      return res.status(401).send({ error: "Already Verified, Please Login" });
    }
  } else {
    return res
      .status(401)
      .send({ error: "Your are not registered, Please Signup !" });
  }
};

module.exports = matchEmailController;
