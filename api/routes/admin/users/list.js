
'use strict';

const User = require('../../../models/user/User');
const Boom = require('boom');

module.exports = {
  method: 'GET',
  path: '/users/list',
  config: {
    handler: (req, res) => {
      User
        .find()
        // Deselect the password and version fields
        .select('-password -__v')
        .exec((err, users) => {
          if (err) {
            throw Boom.badRequest(err);
          }
          if (!users.length) {
            throw Boom.notFound('No users found!');
          }
          res(users);
        })
    },
    // Add authentication to this route
    // The user must have a scope of `admin`
    auth: {
      strategy: 'jwt',
      scope: 'admin'
    }
  }
};