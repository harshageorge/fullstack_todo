require('dotenv').config();
let mysql = require('mysql2');

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected to the database!");
  let query ="CREATE TABLE IF NOT EXISTS todos (id INT NOT NULL DEFAULT 1, title VARCHAR(100) NOT NULL, status TINYINT NOT NULL, PRIMARY KEY (id))";
  connection.query(query, (err, result)=>{
    if (err) {
        // If an error occurred, send a generic server failure
        console.log(`not successful! ${err}`)
        connection.destroy();

    } else {
        //If successful, inform as such
        console.log(`Query was successful, ${result}`)
        //destroy the connection thread
        connection.destroy();
    }
  })
  });
  
  module.exports = connection;