const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

var app = express(); // kreiraj express aplikacija
app.use(bodyParser.urlencoded({ extended: true })); // reading body data from post request


app.get('/iminja', function (req, res) {
    var names = './iminja.txt';
    fs.readFile(names, function (err, data) {
        var fileData = data.toString();
        res.send(fileData);
    })
});
app.post('/iminja/', function (req, res) {

    fs.appendFile('./iminja.txt', `${req.body.ime}`, function (err, data) {
        res.send(req.body.ime);
    })
});


app.listen(8080);