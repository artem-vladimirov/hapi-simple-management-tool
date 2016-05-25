'use strict';

const bcrypt = require('bcrypt');
// const Boom = require('boom');
// const User = require('../../models/user/User');
const AuthenticateUserSchema = require('../../models/user/AuthenticateUserSchema');
const Util = require('../../models/user/Util');

module.exports = {
  method: 'POST',
  path:'/login',
  config: {
    // Check the user's password against the DB
    pre: [
      { method: Util.verifyCredentials, assign: 'user' }
    ],
    handler: (req, res) => {
      // If the user's password is correct, we can issue a token.
      // If it was incorrect, the error will bubble up from the pre method
      res.view('index', { id_token: Util.createToken(req.pre.user) });
    },
    validate: {
      payload: AuthenticateUserSchema
    }
  }
};