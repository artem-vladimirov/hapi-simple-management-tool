module.exports = {
  method: 'GET',
  path:'/contacts',
  handler: function (request, reply) {
    reply.view('static/contacts');
  }
};
