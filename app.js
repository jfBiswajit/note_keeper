const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  console.log('Request received!');
  res.end('Request successfull!')
})

server.on('close', () => {
  console.log('Server closed!');
})

server.listen(8000, '127.0.0.1', () => {
  console.log('Server started at http://127.0.0.1:8000');
});
