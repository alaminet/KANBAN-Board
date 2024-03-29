const User = require("../model/userModel");

const matchOtpController = async (req, res) => {
  const { email, otp } = req.body;
  const existingUser = await User.find({ email });
  if (existingUser.length > 0) {
    if (!existingUser[0].verify) {
      const otpVerify = await User.findOneAndUpdate(
        { email },
        { $unset: { otp: "", token: "" }, $set: { verify: true } },
        { new: true }
      );
      await otpVerify.save();
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

module.exports = matchOtpController;
