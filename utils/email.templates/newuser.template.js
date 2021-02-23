const verifyUserTemplate = (emailAddress, _token) => {
    return `<article>
      <h1>Hello ${emailAddress}</h1>
      <p>Please verifiy your account.</p>
      <p>
          <a href="http://localhost:8080/api/email/verify/${emailAddress}/${_token}" target="_blank" rel="noopener noreferrer">Click here to verify your email</a>
      </p>
    </article>`;
  };
  
  module.exports.verifyUserTemplate = verifyUserTemplate;