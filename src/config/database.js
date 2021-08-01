const { Pool } = require('pg');
const dotenv = require('dotenv');
const app = require('../app');

dotenv.config();

const config = process.env.DATABASE_URL // heroku addons
if (process.env.NODE_ENV === "production") {
    config.join('/sslmode=require');
}

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});


pool.on('connect', () => {
    console.log("Connect successfully");
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};