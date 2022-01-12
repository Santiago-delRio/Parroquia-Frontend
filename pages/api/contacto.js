export default function (req, res) {

    let nodemailer = require('nodemailer')

    const mensaje = `
    Email: ${req.body.email}\n
    Nombre: ${req.body.nombre}\n
    Telefono: ${req.body.telefono}\n
    ……………\n
    ${req.body.mensaje}
    `

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.MAIL_CONTACTO,
            pass: process.env.MAIL_PASSWORD,
        },
        secure: true,
    })

    //Armar el mail
    const datosMail = {
        from: process.env.MAIL_CONTACTO,
        to: process.env.CONTACTO_MAIL_RECEPCION,
        subject: `Mensaje de ${req.body.email} - ${req.body.nombre}`,
        text: mensaje,
    }

    //Enviar mail
    transporter.sendMail(datosMail, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info)
    })

    res.send("Exitoso")
}
