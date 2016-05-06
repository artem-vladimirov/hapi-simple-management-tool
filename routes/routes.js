const authRoutes = [
  require('./auth/login').login,
  require('./auth/login').loginProceed,
  require('./auth/signUp').signUp,
  require('./auth/signUp').signUpProceed
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