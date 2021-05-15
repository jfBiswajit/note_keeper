const http = require('http');
const fs = require('fs');
const parseHtml = require('./modules/parseHtml');

// This is a synchronous code which is declare as top level code and execute only once
const apiData = fs.readFileSync('data/products.json', 'utf-8');
const htmlProducts = fs.readFileSync('templates/products.html', 'utf-8');
const htmlCards = fs.readFileSync('templates/cards.html', 'utf-8');
const htmlDetails = fs.readFileSync('templates/details.html', 'utf-8');
const dataProducts = fs.readFileSync('data/products.json', 'utf-8');

// This code will execute eachtime a route hits
const server = http.createServer((req, res) => {
  const baseURL = 'http://' + req.headers.host + '/';
  const request = new URL(req.url, baseURL);
  const path = request.pathname;
  const id = request.searchParams.get('id');

  // Home
  if (path == '/home' || path == '/') {
    res.end('This is home page.');

    // Api
  } else if (path == '/api') {
    res.writeHead(200, {
      'Content-Type': 'Application/Json',
    });
    res.end(apiData);

    // Products List
  } else if (path == '/products') {
    res.writeHead(200, { 'Content-Type': 'Text/Html' });
    const objProducts = JSON.parse(dataProducts);
    const output = objProducts
      .map((product) => parseHtml(htmlCards, product))
      .join('');

    res.end(htmlProducts.replace('{%PRODUCT_CARDS%}', output));

    // Product details
  } else if (path == '/details') {
    res.writeHead(200, { 'Content-Type': 'Text/Html' });
    const objProducts = JSON.parse(dataProducts)[id];
    const output = parseHtml(htmlDetails, objProducts);

    res.end(output);

    // Page not found
  } else {
    res.writeHead(404);
    res.end('Page not found!');
  }
});

// Listen on a particular port address
server.listen(8000, '127.0.0.1', () => {
  console.log('Server started at http://127.0.01:8000');
});
