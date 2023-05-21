const mysql = require('mysql');
const config = require('../config');

const connection = mysql.createConnection({
  host: config.HOST,
  user: config.USER,
  database: config.DB_NAME,
  password: config.DB_PASSWORD,
  multipleStatements: true
});

connection.connect();
module.exports = connection;