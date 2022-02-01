const { connection } = require('../config/connection');
const util = require('util');

const query = util.promisify(connection.query).bind(connection);
function queryJson(req, res) {
    const searchTerm = req.query.q;
    connection.query(`SELECT * FROM entries WHERE word="${searchTerm}"`, (err, data) => {
        if (err) {
            throw err;
        }
        res.send(data);
    });
}

async function search(req, res) {
    const searchTerm = req.query.q;
    const data = await query(`SELECT * FROM entries WHERE word="${searchTerm}"`);
    return data;
}

module.exports = {
    queryJson,
    search
}