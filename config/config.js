require('dotenv').config();

module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        dialect: 'postgres',
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        use_env_variable: process.env.DB_URL,
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        dialect: 'postgres',
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        dialect: 'postgres',
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
}