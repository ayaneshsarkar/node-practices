const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

// Start Server
const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Listening on ${port}.`));