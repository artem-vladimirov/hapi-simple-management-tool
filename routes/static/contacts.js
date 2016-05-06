module.exports = {
  method: 'GET',
  path:'/contacts',
  config: { auth: false },
  handler: function (request, reply) {
    reply.view('static/contacts');
  }
};
