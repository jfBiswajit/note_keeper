const http = require('http');
const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

let tours = fs.readFileSync(`${__dirname}/data/tours-simple.json`);
tours = JSON.parse(tours);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    success: true,
    result: tours.length,
    data: tours,
  });
});

app.post('/api/v1/tours', (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        success: true,
        data: newTour,
      });
    }
  );
});

app.get('/api/v1/tours/:id', (req, res) => {
  const id = req.params.id;
  const tour = tours.find((el) => el.id === parseInt(id));
  
  if (!tour) {
    return res.status(404).json({
      success: false,
      message: 'Tour not found!',
    });
  }
  
  res.status(200).json({
    success: true,
    data: tour,
  });
});

app.patch('/api/v1/tours/:id', (req, res) => {
  const id = req.params.id;
  const tour = tours.find((el) => el.id === parseInt(id));
  
  if (!tour) {
    return res.status(404).json({
      success: false,
      message: 'Tour not found!',
    });
  }
  
  tour.name = req.body.name;
  
  res.status(200).json(
    {
      success: true,
      data: tour
    }
  );
});

app.listen(8000);
