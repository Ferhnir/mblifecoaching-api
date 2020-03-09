const express = require('express');
var cors = require('cors');
const app = express();
require('dotenv/config');

const tokenRoute = require('./api/routes/jwtToken');
const contactMeBox = require('./api/routes/messages/contactMe');

const corsOptions = {
    origin: ['https://localhost:3010', 'https://mzdunski.website/'],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    methods: 'PUT, POST, DELETE, GET, PATCH',
    allowedHeaders: ["Origin","X-Requested-With","Content-Type","Accept","Authorization","X-Access-Token"]
  }

app.use(cors(corsOptions));

app.use('/token', tokenRoute);
app.use('/contactme', contactMeBox);

module.exports = app;