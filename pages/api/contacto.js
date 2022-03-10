export default async (req, res) => {

    const nodemailer = require('nodemailer')

    //Mensaje del mail
    const mensaje = `
    Email: ${req.body.email}\n
    Nombre: ${req.body.nombre}\n
    Telefono: ${req.body.telefono}\n
    ……………\n
    ${req.body.mensaje}
    `

    //Armar el mail
    const datosMail = {
        from: process.env.MAIL_CONTACTO,
        to: process.env.CONTACTO_MAIL_RECEPCION,
        subject: `Mensaje de ${req.body.email} - ${req.body.nombre}`,
        text: mensaje,
    }

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.MAIL_CONTACTO,
            pass: process.env.MAIL_PASSWORD,
        },
        secure: true,
    })

    await new Promise((resolve, reject) => {
        
        transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        });
    });

    await new Promise((resolve, reject) => {
        //Enviar mail
        transporter.sendMail(datosMail, function (err, info) {
            if(err)
                reject(err)
            else
                res.send("Exitoso")
        })
    });
}
