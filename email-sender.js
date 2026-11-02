const nodemailer = require("nodemailer");

const requiredVariables = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASSWORD",
  "EMAIL_FROM",
  "EMAIL_TO",
];
const missingVariables = requiredVariables.filter(
  (name) => !process.env[name],
);

if (missingVariables.length > 0) {
  console.error(
    `Missing required environment variables: ${missingVariables.join(", ")}`,
  );
  process.exitCode = 1;
} else {
  const port = Number(process.env.SMTP_PORT);

  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    console.error("SMTP_PORT must be a valid port number.");
    process.exitCode = 1;
  } else {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    transporter
      .sendMail({
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: "Hello from Node.js",
        text: "Hello Node!",
      })
      .then((info) => {
        console.log(`Email sent: ${info.messageId}`);
      })
      .catch((error) => {
        console.error("Failed to send email:", error.message);
        process.exitCode = 1;
      });
  }
}
