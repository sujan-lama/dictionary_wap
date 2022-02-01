const express = require('express');
const bodyParser = require('body-parser');
const word = require('./controllers/word');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.set('views', path.join(__dirname) + "/views");


//configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.get("/", function (req, res) {
    res.sendFile("dict.html", { root: __dirname + "/views" });
});

app.get("/api/search", function (req, res) {
    word.queryJson(req, res);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});