'use strict';

const Hapi = require('hapi');
const glob = require('glob');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/config');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection(config.server);

const plugins = [
  {
    register: require('vision')
  },
  {
    register: require('hapi-auth-jwt')
  }
];



server.register(plugins, (err) => {
  if (err) {
    console.error(err);
    throw err;
  }

  server.views(config.views);

  server.auth.strategy('jwt', 'jwt', {
    key: config.authKey,
    verifyOptions: { algorithms: ['HS256'] }
  });

  // server.auth.default('jwt');

  glob.sync('api/routes/**/*.js', {
    root: __dirname
  }).forEach(file => {
    const route = require(path.join(__dirname, file));
    console.log(route);
    server.route(route);
  });
  
});

// Start the server
server.start((err) => {

  if (err) {
    throw err;
  }

  mongoose.connect(config.connections.mongo.url, {
    user: config.connections.mongo.user,
    pass: config.connections.mongo.password
  }, (err) => {
    if (err) {
      throw err;
    }
  });
  console.log('Server running at:', server.info.uri);
});

module.exports = server;