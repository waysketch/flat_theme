const signupTemplate = (emailAddress) => {
  return `<article>
    <h1>Hello ${emailAddress}</h1>
    <p>Thank you for signing up!</p>
    <p>
        To remove yourself from this list click <a href="localhost:3000">here</a>
    </p>
  </article>`;
};

module.exports.signupTemplate = signupTemplate;