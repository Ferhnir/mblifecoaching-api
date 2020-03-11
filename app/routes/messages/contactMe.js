const express = require('express');
const router = express.Router();

const validateToken = require('../../middlewares/validateToken');

router.post('/message', validateToken, (req, res) => {
    res.status(200).json({
        token: "dziala"
    });
});

module.exports = router;