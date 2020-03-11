module.exports = (req, res, next) => {
    try {
        var host = req.get('host');
        if(req.ip === "127.0.0.1" || req.ip === "::ffff:127.0.0.1" || host.indexOf("localhost") !== -1) {
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