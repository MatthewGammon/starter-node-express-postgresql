const router = require('express').Router({ mergeParams: true });
const controller = require('./products.controller');
const methodNotAllowed = require('../errors/methodNotAllowed');

router.route('/out-of-stock-count').get(controller.listOutOfStockCount);
router.route('/price-summary').get(controller.listPriceSummary);
router
  .route('/total-weight-by-product')
  .get(controller.listTotalWeightByProduct);
router.route('/').get(controller.list).all(methodNotAllowed);
router.route('/:productId').get(controller.read).all(methodNotAllowed);

module.exports = router;
