require("dotenv").config();

const nodemailer = require("nodemailer");

const log = console.log;

let transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.PORT,
  secure: process.env.SECURE,
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
});

exports.handler = (event, context, callback) => {
  const { client } = event.body;

  let mailOptions = {
    from: {
      name: "Flance",
      address: process.env.SENDER,
    },
    to: process.env.RECEIVER,
    subject: "Freelancing Client",
    html: `<p><strong>${client}</strong> is looking for a web developer</p>`,
  };

  transporter.sendMail(mailOptions, (error, data) => {
    if (error) {
      return log(error);
    } else {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          result: "success",
        }),
      });
    }
  });
};
