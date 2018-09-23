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
      break;
  }
}

module.exports = {
  route: route
};