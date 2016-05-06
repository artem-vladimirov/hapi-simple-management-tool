module.exports = {
  signUp: {
    method: 'GET',
    path: '/signup',
    config: {auth: false},
    handler: function(request, reply) {
      reply.view('auth/signup');
    }
  },
  signUpProceed: {
    method: 'POST',
    path:'/signup',
    handler: function(request, reply) {
      //@todo accept registering 
      reply();
    }
  }
};