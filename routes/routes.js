const authRoutes = [
  require('./auth/login').login,
  require('./auth/login').loginProceed,
  require('./auth/signIn').signIn,
  require('./auth/signIn').signInProceed
];

const siteRoutes = [
  require('./static/home'),
  require('./static/catalog'),
  require('./static/contacts')
];

const appRoutes = [
  require('./app/index')
];

module.exports = [].concat(authRoutes, siteRoutes, appRoutes);