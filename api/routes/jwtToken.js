const express = require('express');
const router = express.Router();
//SECURE JWT
const jwt = require('jsonwebtoken');

const checkIfLocal = require('../middlewares/validateLocalReq');
const validateToken = require('../middlewares/validateToken');

router.get('/request', checkIfLocal, (req, res) => {

    let token = jwt.sign(
        {
            user: "mailMeBoxForm"
        }, 
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: Math.floor(Date.now() / 1000) + (60 * 60)
        });   

    res.status(200).json({
        jwt_token: token
    });
});

router.post('/validate', validateToken, (req, res) => {
    res.status(200).json({
        token: "ok"
    });
});

module.exports = router;