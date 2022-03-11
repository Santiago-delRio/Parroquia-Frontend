import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {

  // Mensaje del mail
  const mensaje = `
    Email: ${req.body.email}\n
    Nombre: ${req.body.nombre}\n
    Telefono: ${req.body.telefono}\n
    ……………\n
    ${req.body.mensaje}
    `;

  try {
    await sendgrid.send({
      to: process.env.CONTACTO_MAIL_RECEPCION,
      from: process.env.MAIL_CONTACTO,
      subject: `Mensaje de ${req.body.email} - ${req.body.nombre}`,
      text: mensaje,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
};
