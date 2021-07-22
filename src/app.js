require('dotenv').config();
const express = require('express');
const app = express();
const productsRouter = require('./products/products.router');
const categoriesRouter = require('./categories/categories.router');
const suppliersRouter = require('./suppliers/suppliers.router');

app.use(express.json());

app.use('/products', productsRouter);
app.use('/categories', categoriesRouter);
app.use('/suppliers', suppliersRouter);

// Not found handler
app.use((req, res, next) => {
  next({ status: 404, message: `Not found: ${req.originalUrl}` });
});

// Error handler
app.use((error, req, res, next) => {
  console.error(error);
  const { status = 500, message = 'Something went wrong!' } = error;
  res.status(status).json({ error: message });
});

const { PORT = 5000 } = process.env;

// const db = require('./db/connection');

const listener = () => console.log(`Listening on Port ${PORT}!`);
app.listen(PORT, listener);

module.exports = app;
