// OBSOLETE
// Run with "node server.js command"

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Your database file
const middlewares = jsonServer.defaults();

// Add custom middleware for CORS
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow any origin
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Access-Control-Request-Method, Access-Control-Request-Headers');
  next();
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});