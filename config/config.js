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
      url: 'localhost',
      port: 27017,
      database: 'test'
    }
  }
};

module.exports = _.merge(config, local);