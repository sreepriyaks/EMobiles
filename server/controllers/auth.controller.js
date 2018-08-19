var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');
var { saltRounds, JWTsecret } = require('../const').config;

let encryptPassword = password => {
  let salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(password, saltRounds);
};

let comparePassword = function(password, userPassword) {
  return bcrypt.compareSync(password, userPassword);
};

let createToken = function(details) {
  return jwt.sign(details, JWTsecret, { expiresIn: '100 days' });
};

let verifyToken = function(req, res, next) {
  let token = req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, JWTsecret, (err, decoded) => {
      if (err) {
        return {
          code: 500,
          status: 'Authentication Failed',
          message: 'Failed to authenticate token',
          success: false,
          err: typeof err == 'string' ? err : err.message
        };
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    result = {
      code: 401,
      status: 'Request Unauthorized',
      message: 'No token provided',
      success: false,
      err: null
    };

    return res.status(result.code).send(result);
  }
};

module.exports = {
  encryptPassword,
  comparePassword,
  createToken,
  verifyToken
};
