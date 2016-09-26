(function () {
  'use strict';

  var userService = require('../service/user');

  module.exports = {
    getAllUsers: function (req, res) {
      var reqQuery = req.query;

      userService.getUsers(reqQuery, function (err, result) {
        return err ? res.send({ error: err }) : res.send({ result: result });
      });
    },

    getAUser: function (req, res) {
      var userId = req.params.id;

      userService.getUsers({ _id: userId }, function (err, result) {
        return err ? res.send({ error: err }) : res.send({ result: result });
      });
    },

    createUser: function (req, res) {
      // TODO validate user data before saving
      var userData = req.body;

      userService.saveUser(userData, function (err, result) {
        return err ? res.send({ error: err }) : res.send({ result: result });
      });
    },

    updateUser: function (req, res) {
      var newUserData = req.body,
        userQuery = { _id: req.params.id };

      userService.updateUserData(userQuery, userData, function (err, result) {
        return err ? res.send({ error: err }) : res.send({ result: result });
      });
    },

    deleteUser: function (req, res) {
      var userQuery = { _id: req.params.id };

      userService.deleteUserData(userQuery, function (err, result) {
        return err ? res.send({ error: err }) : res.send({ result: result });
      });
    }
  };

} ());