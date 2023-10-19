const Router = require('express-promise-router');
const customers = require('../models/customerModel');
const router = new Router();

router.get('/', customers.getCustomers);
router.get('/:id', customers.getCustomerById);
router.post('/', customers.createCustomer);
  

  
  module.exports = router;