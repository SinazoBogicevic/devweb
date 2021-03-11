import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  host: process.env.REACT_APP_HOST,
  port: process.env.REACT_APP_PORT,
  secure: process.env.REACT_APP_SECURE,
  auth: {
    user: process.env.REACT_APP_USER,
    pass: process.env.REACT_APP_PASSWORD,
  },
});

exports.handler = (event, context, callback) => {
  const { client } = event.body;

  let mailOptions = {
    from: {
      name: "Flance",
      address: process.env.REACT_APP_SENDER,
    },
    to: process.env.REACT_APP_RECEIVER,
    subject: "Freelancing Client",
    html: `<p><strong>${client}</strong> is looking for a web developer</p>`,
  };

  transporter.sendMail(mailOptions, (error, data) => {
    if (error) {
      return console.log(error);
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
