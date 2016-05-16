'use strict';

const bcrypt = require('bcrypt');
const Boom = require('boom');
const User = require('../../models/user/User');
const createUserSchema = require('../../models/user/CreateUserSchema');
const Util = require('../../models/user/Util');

module.exports = {
  method: 'POST',
  path:'/signup',
  config: {
    pre: [
      { method: Util.verifyUniqueUser, assign: 'user' }
    ],
    handler: (req, res) => {

      let user = new User();
      user.email = req.payload.email;
      user.username = req.payload.username;
      user.admin = false;
      Util.hashPassword(req.payload.password, (err, hash) => {
        if (err) {
          throw Boom.badRequest(err);
        }
        user.password = hash;
        user.save((err, user) => {
          if (err) {
            throw Boom.badRequest(err);
          }
          // If the user is saved successfully, issue a JWT
          res({ id_token: Util.createToken(user) }).code(201);
        });
      });
    },

    // Validate the payload against the Joi schema
    validate: {
      payload: createUserSchema
    }
  }
};