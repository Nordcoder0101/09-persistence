'use strict';

const http = require('http');
const Cat = require('./model/cat.js');
const Router = require('./lib/router.js');
const storage = require('./lib/storage.js');
const PORT = process.env.PORT || 3000;
const router = new Router();
const catRoutes = require('./lib/route/cat-route.js');

const server = http.createServer(router.route());

catRoutes(router);

server.listen(PORT, () => {
  console.log(`server be jammin on ${PORT}`);
});