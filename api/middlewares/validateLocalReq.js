var express = require('express');
var app = express();

module.exports = (req, res, next) => {
    console.log('dziala tutaj?');
    try {
        var host = req.get('host');
        if(req.ip === "127.0.0.1" || req.ip === "::ffff:127.0.0.1" || host.indexOf("localhost") !== -1) {
            next();
        } else {
            console.log('Unathorised request');
        }
    } catch (error) {
        console.log(error);       
    }
};