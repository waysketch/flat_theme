// ============ //
// === .env === //
// ============ //
if (process.env.NODE_EV !== "production") {
    require('dotenv').config();
}

// ==================== //
// === Dependencies === //
// ==================== //

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
var cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo')(session);
const passport = require('./utils/passport');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./controllers');

// =================== //
// === Use Express === //
// =================== //

const app = express();

// ============= //
// === Ports === //
// ============= //

const PORT = process.env.PORT || 8080; // server port NOT the website port.

// ================== //
// === Middleware === //
// ================== //

app.use(morgan('dev')); // lets us see our routes when we ping the server.
app.use(cookieParser("jimmy"));
const cookieExpirationDate = new Date();
const cookieExpirationDays = 365;
cookieExpirationDate.setDate(cookieExpirationDate.getDate() + cookieExpirationDays);
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(bodyParser.json());
    
// =============== //
// === MongoDB === //
// =============== //

try {
    mongoose.connect(
        process.env.MONGODB_URI,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => {
            console.log("[MONGODB][DATABASE] Connected.");
        },
    );
} catch (error) {
    console.log("[MONGODB][DATABASE] Could not connect to the Database. [HINT] Check URI name and address in .env file or server env.");
};

app.use(
  session({
    secret: "jimmy",
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: true,
    saveUninitialized: true,
    cookie: {
	    httpOnly: true,
	    expires: cookieExpirationDate // use expires instead of maxAge
	}
  })
);

// ======================== //
// === Passport / Login === //
// ======================== //

app.use(passport.initialize())
app.use(passport.session()) // will call the deserializeUser

// ================== //
// === Static App === //
// ================== //

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

// ============================= //
// === Routing & Controllers === //
// ============================= //

app.use(routes);

// ================= //
// === React App === //
// ================= //

app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// ============= //
// === ERROR === //
// ============= //

// app.use(function (err, req, res, next) {
//     console.log('Ther was an error');
//     console.log(err.stack);
//     res.status(500);
// })

// =============== //
// === Spin Up === //
// =============== //

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});