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

app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

app.use(bodyParser.json());

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