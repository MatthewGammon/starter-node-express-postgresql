const categoriesService = require('./categories.service');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');

async function list(req, res, next) {
  const data = await categoriesService.list();
  res.json({ data });
}
// list function using .then() rather than async/await
// function list(req, res, next) {
//   categoriesService
//     .list()
//     .then((data) => res.json({ data }))
//     .catch(next);
// }

module.exports = {
  list: asyncErrorBoundary(list),
};
