'use strict';

module.exports = {
  method: 'GET',
  path:'/',
  config: { auth: false },
  handler: function (request, reply) {
    reply.view('index');
  }
};
