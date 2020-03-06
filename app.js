const express = require('express');
const app = express();
require('dotenv/config');

const tokenRoute = require('./api/routes/csrfToken');

app.use('/', tokenRoute);

module.exports = app;