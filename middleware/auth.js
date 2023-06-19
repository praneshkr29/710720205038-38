// token has to be validate
//userid should be automatically added to the req.


const jwt = require('jsonwebtoken');
const jwtSecret = require("../config/data.config");

module.exports = (req, res, next) => {
    const token = req.header('x-auth-token');
    //if token exists or not
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }
    try {
        jwt.verify(token, jwtSecret, (error, decoded) => {
            if (error) {
                return res.status(401).json({ msg: 'Token is not valid' });
            }
            else {
                req.user = decoded.user;
                next();
            }
        });
    } catch (err) {
        res.status(401).json({ msg: 'server error: ' + err.message });
    }
};