const express   = require('express');
const router    = express.Router();

const checkIfLocal = require('../middlewares/validateLocalReq');

const jwt = require('jsonwebtoken');
var token = jwt.sign({ 
    // exp: Math.floor(Date.now() / 1000) + (60 * 60),
    data: 'myprivkey'
 }, 'shhhhhh');


router.get('/tokenrequest', checkIfLocal, (req, res) => {
    res.status(200).json({
        message: token
    });
});

module.exports = router;