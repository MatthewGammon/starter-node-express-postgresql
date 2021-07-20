const { PORT = 5000 } = process.env;

const db = require('./db/connection');

const app = require('./app');
const listener = () => console.log(`Listening on Port ${PORT}!`);
app.listen(PORT, listener);
