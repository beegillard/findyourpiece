require('dotenv').config();
const { Pool } = require('pg');
 
const pool = new Pool({
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  port: process.env.PGPORT
}
);


 
module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
};
