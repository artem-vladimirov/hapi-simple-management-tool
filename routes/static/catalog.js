module.exports = {
  method: 'GET',
  path:'/catalog',
  handler: function (request, reply) {

    return reply('here is catalog');
  }
};
