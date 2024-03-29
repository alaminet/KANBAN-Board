const User = require("../model/userModel");
const bcrypt = require("bcrypt");

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await User.find({ email });

  if (existingUser.length > 0) {
    if (existingUser[0].verify) {
      bcrypt.compare(
        password,
        existingUser[0].password,
        function (err, result) {
          if (result) {
            return res.status(200).json({
              success: "Login Successfull, Please Wait",
            });
          } else {
            return res.status(401).send({
              error: "Password not matched",
            });
          }
        }
      );
    } else {
      return res
        .status(401)
        .send({ error: "Your are not Verified, Please Verify !" });
    }
  } else {
    return res
      .status(401)
      .send({ error: "Your are not registered, Please Signup !" });
  }
};

module.exports = loginController;
