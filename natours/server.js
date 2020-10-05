const app = require('./app');

// Start Server
const port = 80;
app.listen(port, () => console.log(`Listening on ${port}.`));