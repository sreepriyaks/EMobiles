const express = require('express');
var app = express();
const bodyParser = require('body-parser');
global._lodash = require('lodash');

module.exports = app;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routes/mobile');
require('./routes/admin');
