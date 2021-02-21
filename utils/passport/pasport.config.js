const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

function initialize(passport, getUserByEmail, getUserById) {
    const authenticateUser = (email, password, done) => {
        const user = getUserByEmail(email);

        if (!user) {
            return done(null, false, { msg: "Username or password incorrect"});
        };

        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user);
            } else {
                return done(null, false, {msg: "Username or password incorrect"});
            }
        } catch (error) {
            return done(error)
        }

    };

    passport.use(new localStrategy( {email} ), authenticateUser)
    passport.serializeUser((user, done) => {
        return done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id));
    });
}

module.exports = initialize;