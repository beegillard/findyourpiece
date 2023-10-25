const db = require('../db');

//get all customers
const getCustomers = (req, res) => {
    db.query("SELECT * FROM customers", (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).json(result.rows)
    })
};

//get customer by id
const getCustomerById = (req, res) => {

    db.query("SELECT * FROM customers WHERE id=$1", [req.params.id], (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).json(result.rows)
    })
};

//post new user
const createCustomer = (req, res) => {
    const {first_name, last_name, email } = req.body;

    db.query("INSERT INTO customers (first_name, last_name, email) VALUES ($1, $2, $3) RETURNING *", [first_name, last_name, email], (error, result) => {
        if (error) {
            throw error
        }
        res.status(201).send(`User added with id:  ${result.rows[0]}`)
    })
};

/*
module.exports = {
    getCustomers,
    getCustomerById,
    createCustomer
};

*/
