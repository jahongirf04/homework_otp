const nodemailer = require("nodemailer");
const config = require("config");

class mailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      host: config.get("smtp_host"),
      port: config.get("smtp_port"),
      secure: false,
      auth: {
        user: config.get("smtp_user"),
        pass: config.get("smtp_password"),
      },
    });
  }
  async sendActivationMail(toEmail, link) {
    await this.transporter.sendMail({
      from: config.get("smtp_user"),
      to: toEmail,
      subject: "Verificatiuon code",
      text: "",
      html: `
            <div> 
            <h1>${link}</h1>
            </div>
            `,
    });
  }
}

module.exports = new mailService();
