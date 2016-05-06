'use strict';

module.exports = {
  login: {
    method: 'GET',
    path:'/login',
    config: { auth: false},
    handler: function(request, reply) {
      return reply.view('auth/login');
    }
  },
  loginProceed: {
    method: 'POST',
    path:'/login',
    handler: function(request, reply) {
      console.log(request);
      var people = { // our "users database"
        1: {
          username: 'john',
          password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm',   // 'secret'
          name: 'John Doe',
          id: '2133d32a'
        }
      };
      //@todo set token to the headers and find the way how to properly validate the user
      return reply('Apply login action');
    }
  }
};