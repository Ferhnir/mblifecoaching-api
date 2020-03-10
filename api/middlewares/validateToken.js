let jwt = require('jsonwebtoken');
const _ = require('lodash');

module.exports = (req, res, next) => {
    //aquire token
    let token = req.headers['x-access-token'] || req.headers['x-authorization']; // Express headers are auto converted to lowercase
    //check if token exist
    if(token) {
      //check if token contain right format and length
      if (_.includes(token,'Bearer') && token.length > 150) {
        //verify token
        jwt.verify(token.slice(7, token.length), process.env.JWT_SECRET_KEY, (err, decoded) => {
          if (err) {
            return res.json({
              success: false,
              message: 'Token is not valid'
            });
          } else {
            req.decoded = decoded;
            next();
          }
        });

      } else {
        return res.json({
          success: false,
          message: 'Error: Invalid auth token'
        });
      }

    } else {
      return res.json({
        success: false,
        message: 'Error: Auth token is not supplied'
      });
    }
};