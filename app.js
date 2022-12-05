const express = require('express');
const path = require('path');
const MariaDBStore = require('express-session-mariadb-store');
const bodyParser = require('body-parser');

// INITIALIZATIONS
const app = express();

// SETTINGS
// Set static path to serve static files
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
    extended: true
}));

// TEMPLATE ENGINE
// Set Pug Template Engine
// Set directory where the template files are located
app.set('views', './views');
// Set template engine to use
app.set('view engine', 'pug');

// MIDDLEWARES
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// GLOBAL VARIABLES

// ROUTES
app.use(require('./routes'));
app.use(require('./routes/index'));

module.exports = app;