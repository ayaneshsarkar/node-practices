const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./../../models/tourModel');
const { dirname } = require('path');

dotenv.config({ path: './config.env' });

const DB = process.env.DB_CONFIG.replace('<PASSWORD>', process.env.DB_PASS);

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => console.log('Connected ✔'));

// READ JSON FILE
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'));

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data Successfully Imported ✔');

  } catch(err) {
    console.error(err);
  }

  process.exit();
};

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data Successfully Deleted ✔');

  } catch(err) {
    console.error(err);
  }

  process.exit();
}

if(process.argv[2] === '--import') {
  importData();
} else if(process.argv[2] === '--delete') {
  deleteData();
}

