module.exports = {
  
  login: function(request, reply) {
    return reply.view('auth/login');
  },
  
  loginProceed: function(request, reply) {
    console.log(request);
    //add token and blah blah to the headers
    return reply('Apply login action');
  }
  
};