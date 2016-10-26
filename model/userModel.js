(function () {
  'use strict';

  var dbConnection = require('./dbConnection');

  var userModel = dbConnection.Schema({
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true
    },
    firstname: {
      type: String,
      trim: true,      
      required: true,      
    }, 
    lastname: {
      type: String,
      trim: true,      
      required: true,
    },
    surname: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true
    },
    phone: {
      type: String,
      trim: true
    },
    role: {
      type: String,
      trim: true,
      required: true
    },
    subject: {
      type: Array,
      trim: true,
      default: []
    }
  });

  module.exports = dbConnection.model('userCollection', userModel);

} ());