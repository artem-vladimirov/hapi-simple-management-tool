'use strict';

module.exports = {
  method: 'GET',
  path: '/signup',
  config: {auth: false},
  handler: function(request, reply) {
    reply.view('auth/signup');
  }
};