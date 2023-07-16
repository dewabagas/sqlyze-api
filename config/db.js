const Pool = require('pg').Pool
require('dotenv').config();

// const pool = new Pool ({
//     user : process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: process.env.DB_DATABASE,
//     password: process.env.DB_PASSWORD
// })

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})

module.exports = pool

