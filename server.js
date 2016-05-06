'use strict';

const Hapi = require('hapi');
const routes = require('./routes/routes');
const config = require('./config/config');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection(config.server);

const plugins = [
  {
    register: require('vision')
  },
  {
    register: require('hapi-auth-jwt2')
  }
];


var validate = function (decoded, request, callback) {
  // do your checks to see if the person is valid

  var people = { // our "users database"
    1: {
      id: 1,
      name: 'Jen Jones'
    }
  };

  console.log(decoded);
  if (!people[decoded.id]) {
    return callback(null, false);
  }
  else {
    return callback(null, true);
  }
};


server.register(plugins, (err) => {
  if (err) {
    console.error(err);
    throw err;
  }

  server.views(config.views);
  
  server.auth.strategy('jwt', 'jwt',
    { key: 'NeverShareYourSecret',          // Never Share your secret key
      validateFunc: validate,            // validate function defined above
      verifyOptions: { algorithms: [ 'HS256' ] } // pick a strong algorithm
    });

  server.auth.default('jwt');

  server.route(routes);
  
});

// Start the server
server.start((err) => {

  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});

module.exports = server;