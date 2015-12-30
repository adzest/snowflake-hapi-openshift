/**
 * # ErrorAlert.js
 *
 * This class uses a component which displays the appropriate alert
 * depending on the platform
 *
 * The main purpose here is to determine if there is an error and then
 * plucking off the message depending on the shape of the error object.
 */
'use strict';
/**
 * ## Imports
 *
 */
var Joi = require('joi');
var AccountHandlers = require('./handlers');

var internals = {};
/**
 * ## Set the method, path, and handler
 *
 * Note the account/logout requires authentication
 *
 * Note the validation of the account/register parameters
 */
internals.endpoints = [
  {
    method: 'POST',
    path: '/account/register',
    handler: AccountHandlers.registerUser,
    config: {
      validate: {
	payload: {
	  username: Joi.string().alphanum().min(6).max(12).required(),
	  password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
	  email: Joi.string().email().required()
	}
      }
    }
  },
  {
    method: 'POST',
    path: '/account/login',
    handler: AccountHandlers.loginUser
  },
  {
    method: 'POST',
    path: '/account/logout',
    handler: AccountHandlers.logoutUser,
    config: {
      auth: 'token'
    }
  },  
  {
    method: 'GET',
    path: '/account/verifyEmail/{token}',
    handler: AccountHandlers.verifyEmail
  },
  {
    method: 'POST',
    path: '/account/resetPasswordRequest',
    handler: AccountHandlers.resetPasswordRequest
  },
  {
    method: 'GET',
    path: '/account/resetPassword/{token}',
    handler: AccountHandlers.displayResetPassword
  },
  {
    method: 'POST',
    path: '/account/resetPassword',
    handler: AccountHandlers.resetPassword
  },
];

module.exports = internals;
