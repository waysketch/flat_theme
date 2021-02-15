const nodemailer = require("nodemailer");

// ======================= //
// === EMAIL TEMPLATES ================================================================================================================ //
// === NOTE: Templates do not have to be HTML files. They can be jsx or javascript files as well and even functions that return markup. //
// ==================================================================================================================================== //
const signupTemplate = require('../email.templates/signup.html');

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
    auth: {
        user: emailUser,
        pass: emailPassword
    }
});

// ============== //
// === CONFIG === //
// ============== //

const configMailOptions = function (emailAddrs, subject, body) {

    // === RECIPIENT === //
    const toEmailAddress = process.env.NODE_ENV === "production" ? emailAddrs : process.env.EMAIL_TO_DEV; // NOTE: EMAIL_TO_DEV means you can send emails from a test account when not in production.
    
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
    exampleEmailTask: (emailAddress, name) {
        const subject = "Example Email";
        const bodyHtml = `<h1>Example</h1><p>This is only a test, ${name}`
    },

    sendSignupEmail: function (emailAddress) {
        const subject = "You have signed up as a users.";
        const bodyHtml = signupTemplate;
        const mailOptions = configMailOptions(emailAddress, subject, bodyHtml);
        return sendEmail(mailOptions)
    }
};

// ============== //
// === EXPORT === //
// ============== //
module.exports = EmailAPI;