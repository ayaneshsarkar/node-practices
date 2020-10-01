const express = require('express');
const fs = require('fs');
const { parse } = require('path');

const app = express();
app.use(express.json());
const port = 80;

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

// Get Tours
app.get('/api/v1/tours', (req, res) => { 
  res.status(200).json({ 
    status: 'success', results: tours.length, data: { tours } 
  });
});

// Get Single Tour
app.get('/api/v1/tours/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tour = tours.find(el => el.id === id);

  if(!tour) res.status(404).json({ status: 'fail', message: 'Invalid Id!' });

  res.status(200).json({ status: 'success', data: { tour } });
});

// Create Tour
app.post('/api/v1/tours', (req, res) => {

  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), (err) => {
    res.status(201).json({
      status: 'success',
      data: { tour: newTour }
    });
  });

});



app.get('/', (req, res) => {
  res.status(200).json({ message: 'OK' });
});

app.listen(port, () => {
  console.log(`Listening on ${port}.`);
});
