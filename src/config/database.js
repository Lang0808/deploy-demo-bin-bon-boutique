const { Pool } = require('pg');
const dotenv = require('dotenv');
const app = require('../app');

dotenv.config();

var config = process.env.DATABASE_URL // heroku addons

if (process.env.NODE_ENV === "production") {
    config = config.concat("?sslmode=require");
}

const pool = new Pool({
    connectionString: config
});


pool.on('connect', () => {
    console.log("Connect successfully");
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};