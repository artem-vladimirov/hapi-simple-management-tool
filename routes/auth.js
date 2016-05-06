/**
 * This module exports auth routes
 * @type {*[]}
 */

const auth = require('../controllers/auth');

module.exports = [{
  method: 'GET',
  path:'/login',
  config: { auth: false},
  handler: auth.login
},

{
  method: 'POST',
  path:'/login',
  handler: auth.loginProceed
}];
