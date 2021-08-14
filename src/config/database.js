const { Pool } = require('pg');
const dotenv = require('dotenv');
const app = require('../app');

dotenv.config();

const config = process.env.DATABASE_URL // heroku addons

const pool = new Pool({
    connectionString: config,
    ssl: { rejectUnauthorized: false }
});


pool.on('connect', () => {
    console.log("Connect successfully");
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};

// https://help.heroku.com/KTXB2SJT/how-do-i-copy-a-csv-file-into-a-postgres-table