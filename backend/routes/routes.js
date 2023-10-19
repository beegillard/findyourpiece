
const puzzles = require('./puzzles');
//const orders = require('./order');
//const cart = require('./cart');
//const customer = require('./customer');


//Mounts each individual router into main application
 
module.exports = (app) => {
  app.use('/puzzles', puzzles);
  //app.use('/orders', orders);
  //app.use('/carts', cart);
  //app.use('/customers', customer);
};