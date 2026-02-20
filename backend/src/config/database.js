const { Pool } = require('pg');

// PostgreSQL connection configuration
const pool = new Pool({
    user: 'your_user', // replace with your database username
    host: 'localhost', // replace with your database host
    database: 'your_database', // replace with your database name
    password: 'your_password', // replace with your database password
    port: 5432, // default PostgreSQL port
});

// Function to handle connection errors
pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

module.exports = { pool };