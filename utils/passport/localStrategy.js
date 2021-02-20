const User = require('../../models').User;
const LocalStrategy = require('passport-local').Strategy;

const strategy = new LocalStrategy(
	{
		usernameField: 'username' // not necessary, DEFAULT
	},
	function (username, password, done) {
		User.findOne({ 'local.username': username }, (err, userMatch) => {

			// === Check for Errors === //
			if (err) {
				return done(err);
			}
			if (!userMatch) {
				return done(null, false, { message: 'Incorrect username' })
			}
			if (!userMatch.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}

			// === Check username and password === //
			// if (!userMatch || !userMatch.checkPassword(password)) {
			// 	return done(null, false, { message: 'email or password was incorrect.' });
			// };
			return done(null, userMatch)
		})
	}
);

module.exports = strategy