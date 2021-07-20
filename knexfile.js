require('dotenv').config();
const { DATABASE_URL } = process.env;

module.exports = {
  development: {
    client: 'postgresql',
    connection: DATABASE_URL,
    seeds: {
      directory: './src/db/seeds',
    },
    migrations: {
      directory: './src/db/migrations',
    },
  },
};
