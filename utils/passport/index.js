const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const User = require('../../models').User

passport.serializeUser((user, done) => {
    console.log("SERIALIZEUSER");
	done(null, { _id: user._id })
})

passport.deserializeUser((id, done) => {
    console.log("DESERIALIZEUSER");
	User.findOne(
		{ _id: id },
		(err, user) => {
			console.log("GOT USER BY ID");
			done(null, user)
		}
	)
})

// ==== Register Strategies ==== //
passport.use(LocalStrategy)

module.exports = passport