'use strict';

module.exports = {
  method: 'GET',
  path:'/catalog',
  handler: function (request, reply) {
    reply.view('static/catalog');
  }
};
