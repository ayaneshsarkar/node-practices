const express = require('express');
const fs = require('fs');
const tourController = require('./../controllers/tourController');


const router = express.Router();

router.route('/').get(tourController.getTours).post(tourController.createTour);
router.route('/:id').get(tourController.getTour).patch(tourController.updateTour).delete(tourController.deleteTour);


// Exporting Module
module.exports = router;