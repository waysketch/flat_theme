const passport = require('passport');
const LocalStrategy = require('./localStrategy');
const User = require('../../models').User;

passport.serializeUser((user, done) => {
	done(null, { _id: user._id })
});

passport.deserializeUser((id, done) => {
	User.findOne(
		{ _id: id },
		'email local.username key',
		( _ , user) => {
			done(null, user)
		}
	)
});

// === Register Strategies === //
passport.use(LocalStrategy)

module.exports = passport