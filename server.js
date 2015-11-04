var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var http = require('http').Server(app);
var io = require('socket.io')(http);

var configDB = require('./server/config/database');

mongoose.connect(configDB.url);

var port = process.env.PORT || 8888;

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'client', 'views'));
app.use(express.static(path.resolve(__dirname, 'client')));

io.on('connection', function (socket) {
    console.log('A User has Connected!');
    socket.on('disconnect', function () {
        console.log('A User has Disconnected');
    })
});

var api = express.Router();
require('./server/routes/api.js')(api);
app.use('/api', api);

app.get('/*', function(req, res) {
    res.render('index.ejs');
});

http.listen(port, function () {
    console.log('Server running on the port ' + port)
});