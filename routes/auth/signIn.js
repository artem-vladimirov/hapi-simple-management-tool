module.exports = {
  signIn: {
    method: 'GET',
    path: '/signin',
    handler: function(request, reply) {
      reply.view('auth/signin');
    }
  },
  signInProceed: {
    method: 'POST',
    path:'/signin',
    handler: function(request, reply) {
      //@todo accept registering 
      reply();
    }
  }
};