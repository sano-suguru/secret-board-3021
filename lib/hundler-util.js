'use strict';

function hundleLogout(req, res) {
  res.writeHead(401, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('ログアウトしました');
}

function hundleNotFound(req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('ページが見つかりません');
}

module.exports = {
  hundleLogout: hundleLogout,
  hundleNotFound: hundleNotFound
}