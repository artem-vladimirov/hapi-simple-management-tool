'use strict';

const appRoutes = [
  require('./app/index')
];

const authRoutes = [
  require('./auth/login').login,
  require('./auth/login').loginProceed,
  require('./auth/signUp').signUp,
  require('./auth/signUp').signUpProceed
];
const staticRoutes = [
  require('./static/home'),
  require('./static/catalog'),
  require('./static/contacts')
];

module.exports = [].concat(appRoutes, authRoutes, staticRoutes);