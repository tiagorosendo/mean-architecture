var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var configDB = require('./server/config/database');

mongoose.connect(configDB.url);

var port = process.env.PORT || 8888;

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'client', 'views'));
app.use(express.static(path.resolve(__dirname, 'client')));

var api = express.Router();
require('./server/routes/api.js')(api);
app.use('/api', api);

app.get('/*', function(req, res) {
    res.render('index.ejs');
});

app.listen(port, function () {
    console.log('Server running on the port ' + port)
});