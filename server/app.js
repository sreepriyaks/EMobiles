const express = require('express');
var app = express();
const bodyParser = require('body-parser');
global._lodash = require('lodash');

module.exports = app;

require('./routes/mobile');
