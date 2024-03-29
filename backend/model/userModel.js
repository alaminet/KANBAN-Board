const mongoose = require("mongoose");
const { schema } = mongoose;

const userSchema = new schema({
  name: String,
  email: String,
  password: String,
  otp: String,
  token: String,
  verify: { type: Boolean, default: false },
  role: { type: String, enum: ["admin", "editor", "user"], default: "user" },
});

module.exports = mongoose.model("User", userSchema);
