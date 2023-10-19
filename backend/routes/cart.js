
const Router = require('express-promise-router');
const carts = require('../models/cartModel');
const router = new Router();

router.get('/', carts.getCarts);
router.get('/', carts.getCartByCustId);
router.get('/', carts.getCartById);
  

  
  module.exports = router;