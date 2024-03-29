require("dotenv").config();
const nodemailer = require("nodemailer");

async function forgotPassEmail(link, email, template) {
  const httpLink = process.env.HTTP_URL;

  const refLink = `${httpLink}resetpass/${link}`;
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
    subject: "Reset Password-Orebi E-commerce", // Subject line
    html: template(refLink), // html body
  });
}

module.exports = forgotPassEmail;
