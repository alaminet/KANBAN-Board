const User = require("../model/userModel");

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
    const user = await new User({
      name: name,
      email: email,
      password: password,
    });
    await user.save();
    return res
      .status(200)
      .send({ message: "Registration Successfull, Check your email" });
  }
};

module.exports = singupController;
