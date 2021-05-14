const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url == '/home' || req.url == '/') {
    res.end('This is home page.');
  }else if (req.url == '/blog') {
    res.end('This is blog page.');
  }else if (req.url == '/about') {
    res.end('This is about page.');
  } else {
    res.writeHead(404, {
      'user-name': 'Biswajit Biswas'
    })
    
    res.end('Sorry! page not found.');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Server started at http://127.0.0.1:8000');
});
