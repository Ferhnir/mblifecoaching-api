const express = require('express');
var cors = require('cors');
const app = express();
require('dotenv/config');

const tokenRoute = require('./app/routes/Auth/jwtToken');
const contactMeBox = require('./app/routes/messages/contactMe');

const corsOptions = {
    origin: process.env.APP_ORIGIN_ALLOWED.split(' '),
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    methods: 'PUT, POST, DELETE, GET, PATCH',
    allowedHeaders: process.env.APP_ORIGIN_ALLOWED.split(' ')
  }

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.status(200).json({
    server_status: 'online',
    api_url: 'https://api.mzdunski.website/'
  });
});
app.use('/token', tokenRoute);
app.use('/contactme', contactMeBox);

module.exports = app;