require('dotenv').config()

const mysql = require('mysql');


const connection = mysql.createPool({
    connectionLimit: 10,
    host: process.env.HOST || "localhost",
    user: process.env.USERNAME || "sujan",
    password: process.env.PASSWORD || "password",
    database: process.env.DATABASE || "entries"
});

// connection.connect((err) => {
//     if (err) throw err;
//     console.log("DB Connection successful");
// })


module.exports = {
    connection
}