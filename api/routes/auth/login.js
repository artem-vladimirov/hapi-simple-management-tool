'use strict';

module.exports = {
    method: 'GET',
    path:'/login',
    config: { auth: false},
    handler: function(request, reply) {
      return reply.view('auth/login');
    }
};