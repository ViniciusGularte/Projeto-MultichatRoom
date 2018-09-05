var express = require('express');
const path = require('path');
var consign = require('consign');

var bodyParser = require('body-parser');

var expressValidator = require('express-validator');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(expressValidator());
consign({ cwd: path.join('') })

    .include('routes')
    .then('controllers')
    .into(app);



module.exports = app;
