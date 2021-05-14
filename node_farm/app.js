const http = require('http');
const fs = require('fs');

const products = ['alo', 'patal', 'moris', 'kumra'];

const data = products.map((el, i) => {
  if (el == 'alo') {
    return true;
  }
});

console.log(data);

// This is a synchronous code which is declare as top level code and execute only once
const apiData = fs.readFileSync('data/products.json', 'utf-8');

// This code will execute eachtime a route hits
const server = http.createServer((req, res) => {
  if (req.url == '/home' || req.url == '/') {
    res.end('This is home page.');
  } else if (req.url == '/api') {
    res.writeHead(200, {
      'Content-Type': 'Application/Json',
    });
    res.end(apiData);
  } else {
    res.writeHead(404);
    res.end('Page not found!');
  }
});

// Listen on a particular port address
server.listen(8000, '127.0.0.1', () => {
  console.log('Server started at http://127.0.01:8000');
});
