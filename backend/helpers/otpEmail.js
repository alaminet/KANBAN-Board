require("dotenv").config();
const nodemailer = require("nodemailer");

async function otpEmail(link, otp, email, template) {
  const httpLink = process.env.HTTP_URL;

  const refLink = `${httpLink}mailverify/${link}`;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "addme4et@gmail.com",
      pass: "nbcpbgotfbzjjarw",
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"Orebi"`, // sender address
    to: email, // list of receivers
    subject: "OTP Verification-Orebi E-commerce", // Subject line
    html: template(otp, refLink), // html body
  });
}

module.exports = otpEmail;
