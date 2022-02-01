const mysql = require('mysql');


const connection = mysql.createConnection({
    host: "localhost",
    user: "sujan",
    password: "password",
    port: "3306",
    database: "entries"
});

connection.connect((err) => {
    if (err) throw err;
    console.log("DB Connection successful");
})


module.exports = {
    connection
}