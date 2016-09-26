(function () {
  'user strict';

  var userModel = require('../model/userModel')

  module.exports = function () {
    function makeQuery(requestQuery) {
      var query;

      if (requestQuery.q) {
        query = {
          $or: [
            { username: requestQuery.q },
            { firstname: requestQuery.q },
            { email: requestQuery.q },
            { lastname: requestQuery.q },
            { surname: requestQuery.q },
            { role: requestQuery.q },
            { phone: requestQuery.q },
            { subject: requestQuery.q }
          ]
        };
        return query;
      }

      if (requestQuery._id) {
        return requestQuery;
      }

      return {};
    }

    return {
      getUsers: function (userQuery, cb) {
        var query = makeQuery(userQuery);

        userModel.find(query)
          .limit(parseInt(userQuery.limit) || parseInt(10))
          .skip(parseInt(userQuery.skip) || parseInt(10))
          .exec(function (err, result) {
            cb(err, result);
          });
      },

      saveUser: function (userData, cb) {
        var newUser = new userModel(userData);

        newUser.save(function (err, result) {
          cb(err, result);
        });
      },

      updateUserData: function (userQuery, newUserData, cb) {
        userModel.update(userQuery, newUserData, function (err, result) {
          cb(err, result);
        });
      },

      deleteUserData: function (userQuery, cb) {
        userModel.remove(userQuery, function (err, result) {
          cb(err, result);
        });
      }
    }

  } ();

} ());