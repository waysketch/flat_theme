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
const session = require('express-session');
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

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());
    
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
    secret: process.env.APP_SECRET,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false
  })
);

// ======================== //
// === Passport / Login === //
// ======================== //

app.use(passport.initialize());
app.use(passport.session());

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