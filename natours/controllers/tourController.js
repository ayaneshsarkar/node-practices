const fs = require('fs');

// All Tours JSON
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));

// Check Id Middleware
exports.checkId = (req, res, next, val) => {
  console.log(`The tour is ${val}`);

  const tour = tours.find(el => el.id === parseInt(req.params.id));
  if(!tour) res.status(404).json({ status: 'fail', message: 'Invalid Id!' });

  next();
}

// Check Name and Price Middleware
exports.checkBody = (req, res, next) => {
  if(!req.body.name || !req.body.price) {
    return res.status(400).json({ status: 'fail', message: 'Missing name or price.' });
  }

  next();
}

// Get Tours
exports.getTours = (req, res) => { 
  console.log(req.requestTime);

  res.status(200).json({ 
    status: 'success', requestedAt: req.requestTime, results: tours.length, data: { tours } 
  });
}

// Get Single Tour
exports.getTour = (req, res) => {
  const id = parseInt(req.params.id);

  const tour = tours.find(el => el.id === id);
  res.status(200).json({ status: 'success', data: { tour } });
}

// Create Tour
exports.createTour = (req, res) => {

  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), (err) => {
    res.status(201).json({
      status: 'success',
      data: { tour: newTour }
    });
  });

}

//Update Tour
exports.updateTour = (req, res) => {
  const id = parseInt(req.params.id);

  const tour = tours.find(el => el.id === id);
  res.status(200).json({ status: 'success', data: { tour: 'Updated Tour Here...' } });
}

// Delete Tour
exports.deleteTour = (req, res) => {
  const id = parseInt(req.params.id);

  const tour = tours.find(el => el.id === id);
  res.status(204).json({ status: 'success', data: null });
}