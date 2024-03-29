const singupController = async (req, res) => {
  const { name, email, passowrd } = req.body;
  if (name) {
    return res.send(name);
  } else {
    return res.send("name not define");
  }
};

module.exports = singupController;
