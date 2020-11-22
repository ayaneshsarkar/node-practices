const Tour = require('./../models/tourModel');

// Get Tours
exports.getTours = (req, res) => { 
  console.log(req.requestTime);

  res.status(200).json({ 
    status: 'success'
    // requestedAt: req.requestTime, results: tours.length, data: { tours } 
  });
}

// Get Single Tour
exports.getTour = (req, res) => {
  // const id = parseInt(req.params.id);

  // const tour = tours.find(el => el.id === id);
  res.status(200).json({ 
    status: 'success' 
    // data: { tour } 
  });
}

// Create Tour
exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({ status: 'success', data: newTour });

  } catch(err) {
    res.status(401).json({ status: 'fail', message: 'Invalid Data Sent!' });
  }
}

//Update Tour
exports.updateTour = (req, res) => {
  // const id = parseInt(req.params.id);

  // const tour = tours.find(el => el.id === id);
  res.status(200).json({ 
    status: 'success'
    // data: { tour: 'Updated Tour Here...' } 
  });
}

// Delete Tour
exports.deleteTour = (req, res) => {
  // const id = parseInt(req.params.id);

  // const tour = tours.find(el => el.id === id);
  res.status(204).json({ 
    status: 'success', 
    data: null 
  });
}