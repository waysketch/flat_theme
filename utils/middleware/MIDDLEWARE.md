# Middleware
This is where we will hand things like SMS, email, any middleware scripts that are required to run server side. These will not be accessable to the client.

## Example
An email service is required to send automated password reset emails and CCPA requrests.

## Nodemailer
`npm install --save nodemailer`

[nodemailer docs](https://nodemailer.com/about/);

This package is able to send emails from the node server to users. See the `root > utils > middleware > email templates` for more info.

Emails include:
- password reset request
- new users verification
- email to clients about promotions and offers

**Oauth2**
Nodemailer [docs](https://nodemailer.com/smtp/oauth2/) for OAuth2.

**Gmail Less Secure Apps**

If using **Gmail** be sure to change settings to _Use Less Secure Apps_ unless you are using OAuth.