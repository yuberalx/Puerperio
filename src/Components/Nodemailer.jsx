const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail', // Cambia esto al servicio que quieras utilizar
  auth: {
    user: 'agrowjobs@gmail.com',
    pass: '$uperMan2024$',
  },
});

export default transporter;
