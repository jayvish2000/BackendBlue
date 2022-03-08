const nodemailer = require('nodemailer');
const config = require('./config');

exports.send_external_mail = async (mailOptions) => {
    const transporter = nodemailer.createTransport(config.API_EMAIL.INTERNAL_EMAIL.SENDENING_CONFIGURATION);

    transporter.sendMail(mailOptions, async (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(info.response);
        }
    });
};

exports.send_b2c_mail = async (mailOptions) => {
    const transporter = nodemailer.createTransport(config.API_EMAIL.B2C_EMAIL.SENDENING_CONFIGURATION);

    transporter.sendMail(mailOptions, async (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(info.response);
        }
    });
};

// exports.testmail = async () => {
//     try {
//         const transport = nodemailer.createTransport(config.API_EMAIL.B2C_EMAIL.SENDENING_CONFIGURATION)
    
//         const mail_options = {
//             from: `THE G.O.A.T <${config.user}>`,
//             to: 'afsarzahin@gmail.com',
//             subject: 'A Message From The G.O.A.T',
//             html: `<h3> You're Awesome. </h3>`
//         }
    
    
//         transport.sendMail(mail_options, function(error, result) {
//             if (error) {
//                 console.log('Error: ', error)
//             } else {
//                 console.log('Success: ', result)
//             }
//             transport.close()
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }