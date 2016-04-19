// Add the route

module.exports = {
  method: 'GET',
  path:'/login',
  handler: function (request, reply) {

    return reply('Login form');
  }
};

module.exports = {
  method: 'POST',
  path:'/login',
  handler: function (request, reply) {

    return reply('Apply login action');
  }
};
