(function () {
  'use strict';

  var mongoose = require('mongoose'),
    dbUrl = proceass.env.DATABASE || 'mongodb://localhost/retin-user';

  mongoose.connect(dbUrl, function (error) {
    console.log(error ? error : 'Connected to DB');
  });

  module.exports = mongoose;

} ());