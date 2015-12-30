/**
 * # routes.js
 *
 * All the routes available are defined here
 * The endpoints descripe the method (POST/GET...)
 * and the url ('account/login')
 * and the handler
 *
 *
 */
'use strict';
/**
* ## All the routes are joined
*
*/
var AccountRoutes = require('../routes/account/endpoints'),
    GeneralRoutes = require('../routes/general/endpoints'),
    RestrictedRoutes = require('../routes/restricted/endpoints');

var internals = {};

//Concatentate the routes into one array
internals.routes = [].concat(AccountRoutes.endpoints,
                             GeneralRoutes.endpoints,
                             RestrictedRoutes.endpoints);

//set the routes for the server
internals.init = function (server) {
  server.route(internals.routes);
};

module.exports = internals;
