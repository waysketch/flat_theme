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

const PORT = process.env.PORT || 8080;

// ================== //
// === Middleware === //
// ================== //

app.use(morgan('dev'));

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

// ================= //
// === React App === //
// ================= //
ß
app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// =============== //
// === Spin Up === //
// =============== //

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});