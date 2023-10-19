const { dnsPrefetchControl } = require('helmet');
const db = require('../db/index');


const getCarts = (req, res) => {
    db.query("SELECT * FROM carts", (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).json(result.rows);

    })
};


 const getCartByCustId = (req, res) => {
    db.query("SELECT * FROM carts WHERE customer_id = $1", [req.query.customer_id], (error, result) => {
           if (error) {
               throw error;
           }
           res.status(200).json(result.rows);
       })
   }; 

   const getCartById = (req, res) => {
    db.query("SELECT * FROM carts WHERE id = $1", [req.query.id], (error, result) => {
           if (error) {
               throw error;
           }
           res.status(200).json(result.rows);
       })
   };

//    const addItemToCart = (req, res) => {
//     db.query("")
//    }

   module.exports = {
    getCartByCustId,
    getCartById,
    getCarts
   };