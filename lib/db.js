const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'SamBS0279',
  database: 'node_jwt',
  multipleStatements: true
});

connection.connect();
module.exports = connection;