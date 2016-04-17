// Add the route

module.exports = {
  method: 'GET',
  path:'/app',
  handler: function (request, reply) {

    return reply('App here');
  }
};
