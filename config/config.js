'use strict';

const _ = require('lodash');
const local = require('./local');

const config = {
  server: {
    port: 3000,
    host: 'localhost'
  },
  
  connections: {
    mongo: {
      username: '',
      password: '',
      url: 'mongodb://localhost:27017/test',
      port: 27017,
      database: 'test'
    }
  },

  views: {
    engines: { jade: require('jade') },
    relativeTo: __dirname,
    path: '../views',
    compileOptions: {
      pretty: true
    }
  },
  
  authKey: 'NeverShareYourSecret' //should be overwritten in the local.js file
};

module.exports = _.merge(config, local);