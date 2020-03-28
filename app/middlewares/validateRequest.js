module.exports = (req, res, next) => {
    try {
        if(req.ip === "::ffff:127.0.0.1") {
            next();
        } else {
            return res.json({
                success: false,
                message: 'Request not allowed'
              });
        }
    } catch (error) {
        return res.json({
            success: false,
            message: error
          });     
    }
};