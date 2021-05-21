const http = require('http');
const express = require('express');
const fs = require('fs');

const app = express();

let tours = fs.readFileSync(`${__dirname}/data/tours-simple.json`);
tours = JSON.parse(tours);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json(
    {
      success: true,
      result: tours.length,
      data: tours
    }
  );
})

app.listen(8000);
