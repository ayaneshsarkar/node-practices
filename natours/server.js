const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DB_CONFIG.replace('<PASSWORD>', process.env.DB_PASS);

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => console.log('Connected ✔'));

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true
  },
  rating: {
    type: Number,
    default: 4.8
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price']
  }
});

const Tour = mongoose.model('Tour', tourSchema);

const testTour = new Tour({
  name: 'The Forest Camper',
  rating: 4.3,
  price: 250
});

testTour.save().then(doc => console.log(doc)).catch(err => console.log(err));

// Start Server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}.`));