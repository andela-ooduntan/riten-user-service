(function () {
  'use strict';

  var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    routes = require('./routes/user'),
    app = express();

  app.use(routes);
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());
  app.use(morgan('dev'));

  app.listen(3001, function () {
    console.log('Server started at port 3001');
  });

} ());