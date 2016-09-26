(function() {
  'use strict';

  var userController = require('../controller/user'),
  express = require('express');
  routes = express.Router();

  routes.get('/users', userController.getAllUsers);
  routes.get('/users:id', userController.getAUser);
  routes.post('/users', userController.createUser);
  routes.put('/users', userController.updateUser);
  routes.delete('/users', userController.deleteUser);

  module.exports = routes; 

}());