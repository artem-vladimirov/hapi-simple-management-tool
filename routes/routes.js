const siteRoutes = [
  require('./static/home'),
  require('./static/catalog'),
  require('./static/contacts')
];

const appRoutes = [
  require('./app/index')
];

module.exports = [].concat(siteRoutes, appRoutes);