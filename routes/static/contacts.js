module.exports = {
  method: 'GET',
  path:'/contacts',
  handler: function (request, reply) {

    return reply('contacts');
  }
};
