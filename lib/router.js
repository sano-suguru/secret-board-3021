'use strict';
const postsHandler = require('./posts-handler');
const util = require('./hundler-util');

function route(req, res) {
  switch (req.url) {
    case '/posts':
      postsHandler.handle(req, res);
      break;
    case '/logout':
      util.hundleLogout(req, res);
      break;
    default:
      util.hundleNotFound(req, res);
      break;
  }
}

module.exports = {
  route: route
};