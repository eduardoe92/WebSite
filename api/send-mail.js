require("dotenv").config();

const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_DESTINO,
    subject: "Mensaje de contacto",
    text: `Nombre: ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Mensaje enviado con éxito");
    res.status(200).json({ message: "Mensaje enviado con éxito" });
  } catch (error) {
    console.error("Error al enviar el mensaje:", error);
    res.status(500).json({ error: "Hubo un problema al enviar el mensaje." });
  }
};
