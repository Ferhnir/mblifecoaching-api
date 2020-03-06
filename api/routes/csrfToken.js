const express   = require('express');
const router    = express.Router();

const checkIfLocal = require('../middlewares/validateLocalReq');

const jwt = require('jsonwebtoken');
var token = jwt.sign({ 
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    data: process.env.JWT_SECRET_KEY
 }, 'shhhhhh');


router.get('/tokenrequest', checkIfLocal, (req, res) => {
    res.status(200).json({
        jwt_token: token
    });
});

module.exports = router;