const nodemailer = require("nodemailer");

// ======================= //
// === EMAIL TEMPLATES ================================================================================================================ //
// === NOTE: Templates do not have to be HTML files. They can be jsx or javascript files as well and even functions that return markup. //
// ==================================================================================================================================== //
const { signupTemplate } = require('../email.templates/signup.template');
const { verifyUserTemplate } = require('../email.templates/newuser.template');

// =========== //
// === ENV === //
// =========== //

if (process.env.NODE_EV !== "production") {
    require('dotenv').config();
};

const emailUser = process.env.SITE_EMAIL;
const emailPassword = process.env.SITE_PASSWORD;

// ================== //
// === NODEMAILER === //
// ================== //

const transporter = nodemailer.createTransport({
    service: 'gmail', // NOTE: default service is gmail
    host: 'smtp.gmail.com',
    port: 465,
    secure: false,
    auth: {
        user: emailUser,
        pass: emailPassword
    }
});

// ============== //
// === CONFIG === //
// ============== //

const configMailOptions = function (emailAddress, subject, body) {

    // === RECIPIENT === //
    const toEmailAddress = emailAddress; // NOTE: EMAIL_TO_DEV means you can send emails from a test account when not in production.

    // === MAKE EMAIL === //
    const mailOptions = {
        from: emailUser,        // sender address
        to: toEmailAddress,     // list of receivers
        subject: subject,       // Subject line
        html: body              // plain html body. This can include HTML, CSS, and IMAGES/GIFS/MP4
    };

    // === RETURN EMAIL === //
    return mailOptions;
};

// ==================== //
// === SEND TRIGGER === //
// ==================== //

const sendEmail = function (mailOptions) {
    return transporter.sendMail(mailOptions);
};

// ============================== //
// === CREATE REQUEST EXAMPLE === //
// ============================== //
const EmailAPI = {
    sendSignupEmail: function (emailAddress) {
        const subject = "You have signed up as a user for Flat Theme.";
        const bodyHtml = signupTemplate(emailAddress);
        const mailOptions = configMailOptions(emailAddress, subject, bodyHtml);
        return sendEmail(mailOptions)
    },
    sendVerificationEmail: function (emailAddress, temp_token) {
        const subject = "Please verify your account";
        const bodyHtml = verifyUserTemplate(emailAddress, temp_token);
        const mailOptions = configMailOptions(emailAddress, subject, bodyHtml);
        return sendEmail(mailOptions)
    }
};

// ============== //
// === EXPORT === //
// ============== //
module.exports = EmailAPI;