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
const morgan = require('morgan');
const path = require('path');
const routes = require('./controllers');
const session = require('express-session');
const passport = require('./utils/passport');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');

// =================== //
// === Use Express === //
// =================== //

const app = express();

app.use(express.json());

app.use(
    express.urlencoded({
        extended: false,
    })
);

// ============= //
// === Ports === //
// ============= //

const PORT = process.env.PORT || 8080; // server port NOT the website port.

// ================== //
// === Middleware === //
// ================== //

app.use(morgan('dev')); // lets us see our routes when we ping the server.

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
    secret: process.env.APP_SECRET || "this is the default passphrase DONT USE THIS CODE IN PRODUCTION",
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false,
  })
);

// ======================== //
// === Passport / Login === //
// ======================== //

app.use(passport.initialize());

// ============================= //
// === Routing & Controllers === //
// ============================= //

app.use(routes);

// ================== //
// === Static App === //
// ================== //

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

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