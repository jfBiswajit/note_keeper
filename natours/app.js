const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({user: 'Biswajit'})
});

app.listen(8000, () => {
  console.log('Server started at http://127.0.0.1:8000');
})
