const Tour = require('./../models/tourModel');

// Get Tours
exports.getTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({ status: 'success', results: tours.length, data: { tours } });

  } catch(err) {
    res.status(401).json({ status: 'fail', message: err });
  }
}

// Get Single Tour
exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({ status: 'success', data: tour });

  } catch(err) {
    res.status(401).json({ status: 'fail', message: err });
  }
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
exports.updateTour = async (req, res) => {
  try {
    const updatedTour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.status(200).json({ status: 'success', data: updatedTour });

  } catch(err) {
    res.status(401).json({ status: 'fail', message: err });
  }
}

// Delete Tour
exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({ status: 'success', data: null });
  
  } catch(err) {
    res.status(401).json({ status: 'fail', message: err });
  }
}