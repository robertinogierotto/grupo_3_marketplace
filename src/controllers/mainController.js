const db = require('../database/models');
const nodemailer = require('nodemailer');


const main = {
    home: async (req, res) => {
        let productosEnOferta = await db.Product.findAll({
            where: {
                dailyOnSale: 0
            },
            order: [
                ['discount', 'DESC']
            ]
        });
        res.render('home', { styles: 'styles-home.css', productosEnOferta });
        await db.VisitedPage.increment('numberOfVisits', {by: 1, where: {page: 'Home'}});
    },
    whoWeAre: async (req, res) => {
        res.render('whoWeAre', { styles: 'styles-whoWeAre.css' })
        await db.VisitedPage.increment('numberOfVisits', {by: 1, where: {page: 'Quienes Somos'}});
    },
    contact: async (req, res) => {
        res.render('contact', { styles: 'styles-contact.css' });
        await db.VisitedPage.increment('numberOfVisits', {by: 1, where: {page: 'Contacto'}});
    },
    sendEmail: async (req, res) => {

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'rodawisetecnology@gmail.com',
                pass: 'Rodawise123'
            }
        });

        let mailOptions = {
            from: 'rodawisetecnology@gmail.com',
            to: `rodawisetecnology@gmail.com, ${req.body.email}`,
            subject: `${req.body.name}! Hemos recibido tu consulta!`,
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
            <html>
              <head>
                <!-- Compiled with Bootstrap Email version: 1.1.5 -->
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                <meta http-equiv="x-ua-compatible" content="ie=edge">
                <meta name="x-apple-disable-message-reformatting">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
                <style type="text/css">
                  body,table,td{font-family:Helvetica,Arial,sans-serif !important}.ExternalClass{width:100%}.ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div{line-height:150%}a{text-decoration:none}*{color:inherit}a[x-apple-data-detectors],u+#body a,#MessageViewBody a{color:inherit;text-decoration:none;font-size:inherit;font-family:inherit;font-weight:inherit;line-height:inherit}img{-ms-interpolation-mode:bicubic}table:not([class^=s-]){font-family:Helvetica,Arial,sans-serif;mso-table-lspace:0pt;mso-table-rspace:0pt;border-spacing:0px;border-collapse:collapse}table:not([class^=s-]) td{border-spacing:0px;border-collapse:collapse}@media screen and (max-width: 600px){.w-full,.w-full>tbody>tr>td{width:100% !important}.w-24,.w-24>tbody>tr>td{width:96px !important}.w-40,.w-40>tbody>tr>td{width:160px !important}.p-lg-10:not(table),.p-lg-10:not(.btn)>tbody>tr>td,.p-lg-10.btn td a{padding:0 !important}.p-3:not(table),.p-3:not(.btn)>tbody>tr>td,.p-3.btn td a{padding:12px !important}.p-6:not(table),.p-6:not(.btn)>tbody>tr>td,.p-6.btn td a{padding:24px !important}*[class*=s-lg-]>tbody>tr>td{font-size:0 !important;line-height:0 !important;height:0 !important}.s-4>tbody>tr>td{font-size:16px !important;line-height:16px !important;height:16px !important}.s-6>tbody>tr>td{font-size:24px !important;line-height:24px !important;height:24px !important}.s-10>tbody>tr>td{font-size:40px !important;line-height:40px !important;height:40px !important}}
                </style>
              </head>
              <body class="bg-light" style="outline: 0; width: 100%; min-width: 100%; height: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-family: Helvetica, Arial, sans-serif; line-height: 24px; font-weight: normal; font-size: 16px; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; color: #000000; margin: 0; padding: 0; border-width: 0;" bgcolor="#f7fafc">
                <table class="bg-light body" valign="top" role="presentation" border="0" cellpadding="0" cellspacing="0" style="outline: 0; width: 100%; min-width: 100%; height: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-family: Helvetica, Arial, sans-serif; line-height: 24px; font-weight: normal; font-size: 16px; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; color: #000000; margin: 0; padding: 0; border-width: 0;" bgcolor="#f7fafc">
                  <tbody>
                    <tr>
                      <td valign="top" style="line-height: 24px; font-size: 16px; margin: 0;" align="left" bgcolor="#f7fafc">
                        <table class="container" role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
                          <tbody>
                            <tr>
                              <td align="center" style="line-height: 24px; font-size: 16px; margin: 0; padding: 0 16px;">
                                <!--[if (gte mso 9)|(IE)]>
                                  <table align="center" role="presentation">
                                    <tbody>
                                      <tr>
                                        <td width="600">
                                <![endif]-->
                                <table align="center" role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 600px; margin: 0 auto;">
                                  <tbody>
                                    <tr>
                                      <td style="line-height: 24px; font-size: 16px; margin: 0;" align="left">
                                        <table class="s-10 w-full" role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
                                          <tbody>
                                            <tr>
                                              <td style="line-height: 40px; font-size: 40px; width: 100%; height: 40px; margin: 0;" align="left" width="100%" height="40">
                                                &#160;
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table class="ax-center" role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                                          <tbody>
                                            <tr>
                                              <td style="line-height: 24px; font-size: 16px; margin: 0;" align="left">
                                                <img class="w-24" src="http://drive.google.com/uc?id=10J9pRKqkJ2CHFtEcNOqccyKew9Wy6INV" style="height: auto; line-height: 100%; outline: none; text-decoration: none; display: block; width: 250px; border-style: none; border-width: 0;" width="96">
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table class="s-10 w-full" role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
                                          <tbody>
                                            <tr>
                                              <td style="line-height: 40px; font-size: 40px; width: 100%; height: 40px; margin: 0;" align="left" width="100%" height="40">
                                                &#160;
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table class="card p-6 p-lg-10 space-y-4" role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-radius: 6px; border-collapse: separate !important; width: 100%; overflow: hidden; border: 1px solid #e2e8f0;" bgcolor="#ffffff">
                                          <tbody>
                                            <tr>
                                              <td style="line-height: 24px; font-size: 16px; width: 100%; margin: 0; padding: 40px;" align="left" bgcolor="#ffffff">
                                                <h1 class="h3 fw-700" style="padding-top: 0; padding-bottom: 0; font-weight: 700 !important; vertical-align: baseline; font-size: 28px; line-height: 33.6px; margin: 0;" align="left">
                                                    ${req.body.name}: Gracias por comunicarte con nosotros!
                                                </h1>
                                                <table class="s-4 w-full" role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
                                                  <tbody>
                                                    <tr>
                                                      <td style="line-height: 16px; font-size: 16px; width: 100%; height: 16px; margin: 0;" align="left" width="100%" height="16">
                                                        &#160;
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <p class="" style="line-height: 24px; font-size: 16px; width: 100%; margin: 0;" align="left">
                                                  A continuación los datos de tu mensaje: <br>
                                                  <strong>Recibimos el mensaje desde: </strong> ${req.body.pais} <br>
                                                  <strong>Tu teléfono: </strong> ${req.body.phoneNumber} <br>
                                                  <strong>Tu Mensaje: </strong> ${req.body.message} <br>
                                                  <br>
                                                  <strong>Por favor, verifica que todos los datos sean correctos! <br> 
                                                  Si no es así, puedes mandarnos otro mensaje por medio de la pagina web, presionando el siguiente boton! </strong> 
                                                </p>
                                                <table class="s-4 w-full" role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
                                                  <tbody>
                                                    <tr>
                                                      <td style="line-height: 16px; font-size: 16px; width: 100%; height: 16px; margin: 0;" align="left" width="100%" height="16">
                                                        &#160;
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <table class="btn btn-primary p-3 fw-700" role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-radius: 6px; border-collapse: separate !important; font-weight: 700 !important;">
                                                  <tbody>
                                                    <tr>
                                                      <td style="line-height: 24px; font-size: 16px; border-radius: 6px; font-weight: 700 !important; margin: 0;" align="center" bgcolor="#0d6efd">
                                                        <a href="http://localhost:3001/contact" style="color: #ffffff; font-size: 16px; font-family: Helvetica, Arial, sans-serif; text-decoration: none; border-radius: 6px; line-height: 20px; display: block; font-weight: 700 !important; white-space: nowrap; background-color: #0d6efd; padding: 12px; border: 1px solid #0d6efd;">Escribir nuevo mensaje</a>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table class="s-10 w-full" role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
                                          <tbody>
                                            <tr>
                                              <td style="line-height: 40px; font-size: 40px; width: 100%; height: 40px; margin: 0;" align="left" width="100%" height="40">
                                                &#160;
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table class="ax-center" role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                                          <tbody>
                                            <tr>
                                              <td style="line-height: 24px; font-size: 16px; margin: 0;" align="left">
                                                <img class="w-40" src="http://drive.google.com/uc?id=1JRKy3fBnklZdMeIchRALyCwIRR1p-MUJ" style="height: auto; line-height: 100%; outline: none; text-decoration: none; display: block; width: 160px; border-style: none; border-width: 0;" width="160">
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table class="s-6 w-full" role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
                                          <tbody>
                                            <tr>
                                              <td style="line-height: 24px; font-size: 24px; width: 100%; height: 24px; margin: 0;" align="left" width="100%" height="24">
                                                &#160;
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <div class="text-muted text-center" style="color: #718096;" align="center">
                                          <strong>RODAWISE</strong>  <br>
                                          El mejor marketplace de tecnología.
                                        </div>
                                        <table class="s-6 w-full" role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
                                          <tbody>
                                            <tr>
                                              <td style="line-height: 24px; font-size: 24px; width: 100%; height: 24px; margin: 0;" align="left" width="100%" height="24">
                                                &#160;
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <!--[if (gte mso 9)|(IE)]>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                                <![endif]-->
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </body>
            </html>
            `
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        await db.SendedComment.increment('numberOfComments', {by: 1, where: {id: 1}});
    }
}
module.exports = main;