// Add the route

module.exports = {
  method: 'GET',
  path:'/app',
  config: { auth: 'jwt' },
  handler: function (request, reply) {
    reply({text: 'You used a Token!'})
      .header("Authorization", request.headers.authorization);
  }
};
