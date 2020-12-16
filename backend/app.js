var express = require('express');
const bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var cors = require('cors');

var config = require('./config/database');

var app = express();




mongoose.connect(config.database, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });

var api = require('./routes/api');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(passport.initialize());

app.get('/', function(req, res) {
  res.send('Page under construction.');
});

app.use('/api', api);

module.exports = app;