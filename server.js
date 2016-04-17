'use strict';

const Hapi = require('hapi');
const routes = require('./routes/routes');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

server.route(routes);


// Start the server
server.start((err) => {

  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});

module.exports = server;