const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const mailGun = require('nodemailer-mailgun-transport');
const { API_KEY, DOMAIN } = require('../config/secrets.config');

const sendEmail = async (email, subject, templateName, data) => {
  try {
    const transporter = nodemailer.createTransport(
      mailGun({
        auth: {
          api_key: API_KEY,
          domain: DOMAIN
        }
      })
    );

    transporter.use(
      'compile',
      hbs({
        viewEngine: {
          partialsDir: './src/emails/',
          defaultLayout: false
        },
        viewPath: './src/emails/'
      })
    );

    await transporter.sendMail({
      from: 'Ewaste Admin <admin@ewaste.net>',
      to: email,
      subject,
      template: templateName,
      context: {
        ...data
      }
    });

    console.log('email sent sucessfully');
  } catch (error) {
    console.log(error, 'email not sent');
    console.log(API_KEY);
    console.log(DOMAIN);
  }
};

module.exports = sendEmail;
