'use strict';

const Hapi = require('hapi');
const routes = require('./routes/routes');
const config = require('./config/config');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection(config.server);

server.route(routes);

const plugins = [
  {
    register: require('vision')
  }
];

server.register(plugins, (err) => {
  if (err) {
    console.error(err);
    throw err;
  }

  server.views(config.views);
  
});

// Start the server
server.start((err) => {

  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});

module.exports = server;