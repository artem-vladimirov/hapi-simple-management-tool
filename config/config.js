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
  
  authKey: 'C97FVn52QIw1+FsER/2kgVPg1kgYnc7nwgfPEovHWucMyySFhDFxBnE0/d/9+uTjGKKW+kJozN3t0HoIkamsjMN7Z9pN1IdnGlZMus58MEDv43d2AoaMYis+dfVVKco5zzEDDXKmFnWOqfu+Jz5NPWk2oN1e4sG7vwgzT7fkpXBzEJhRtRgT7xLd71G8bhvk8Xe1mflXCPxk4bFxu67p7KufADSCmAjWRIVxQweoH+U1htJfU38+1AD+l+5ptNnGF778hflFxqD+HNbkl721mAfv+mRcJTpyUTacTsV7O0Dsv9KhUDUNNlBEYFrgFfQGTsP9eJGi82UA8t7oQkp1iQ==' //should be overwritten in the local.js file
};

module.exports = _.merge(config, local);