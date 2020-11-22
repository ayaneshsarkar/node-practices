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

// Start Server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}.`));