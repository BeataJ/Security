const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  database: 'security',
  user: 'root',
  password: 'potworek111',
  // multipleStatements: true
})

module.exports = pool;