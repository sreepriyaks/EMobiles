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

module.exports = {
  encryptPassword,
  comparePassword,
  createToken
};
