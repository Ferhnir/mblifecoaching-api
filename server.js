const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3011;
const server = http.createServer(app);

console.log('Server started');

server.listen(port); 