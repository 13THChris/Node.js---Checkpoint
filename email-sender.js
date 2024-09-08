const nodemailer = require("nodemailer");

// Configuration du transporteur SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "votre-email@gmail.com",
    pass: "votre-mot-de-passe"
  },
  tls: {
    rejectUnauthorized: false // Désactive la vérification stricte des certificats
  }
});

// Configuration de l'email
const mailOptions = {
  from: "votre-email@gmail.com",
  to: "destinataire@example.com",
  subject: "Test Email",
  text: "Hello, this is a test email sent from Node.js!"
};

// Envoi de l'email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email envoyé : " + info.response);
  }
});
