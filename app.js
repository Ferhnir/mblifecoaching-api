const express = require('express');
const app = express();

const tokenRoute = require('./api/routes/csrfToken');

app.use('/', tokenRoute);

module.exports = app;