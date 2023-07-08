var jwt = require('jsonwebtoken');
let privateKey = process.env.SECRET_KEY;
require('dotenv').config();

const verify = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({
            status: "FAILED",
            message: "No token provided",
        });
    }
  
    jwt.verify(token, privateKey, (err, decoded) => {
        if (err) {
            let message = 'Token is not valid';
            if (err.name === 'TokenExpiredError') {
                message = 'Token has expired';
            }
            return res.status(401).json({
                status: "FAILED",
                code: 401,
                message: message,
            });
        }
  
        req.id = decoded.id;
        console.log(`User id set to ${req.id}`);
        next();
    });
  }
  




const authorization = async (req, res, next) => {
    const token = req.headers["token"]
    jwt.verify(token, privateKey, (err, decoded) => {
        console.log('decoded', decoded);
        if (req.params.userId != decoded.id) {
            return res.status(403).send({
                err: 'Forbidden'
            })
        }
        next();
    });
}

const generateToken = (payload) => {
    return jwt.sign(payload, privateKey, {
        algorithm: 'HS256',
        expiresIn: "1y"
    });
}

module.exports = {
    generateToken,
    verify,
    authorization
};

