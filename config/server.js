var bodyParser = require('body-parser');

var express = require('express');

var consign = require('consign');

var expressValidator = require('express-validator');

var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(expressValidator());

consign({cwd: process.cwd() + '/app'})
  .include('controllers')
  .then('routes')
.into(app);



module.exports = app;
