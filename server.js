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

var users = [];

io.on('connection', function (socket) {
    var username = '';

    console.log('A User has Connected!');

    socket.on('add-user', function (data) {
        if (users.indexOf(data.username) == -1) {
            username = data.username;
            io.emit('add-user', {username: username});
            users.push(data.username);
        } else {
            socket.emit('prompt-username', {message: 'User already exist!'})
        }

    });

    socket.on('request', function () {
        socket.emit('users', {users: users});
    });

    socket.on('message', function (data) {
        io.emit('message', {username: username, message: data.message});
    });

    socket.on('disconnect', function () {
        console.log(username + 'has Disconnected');
        users.splice(users.indexOf(username), 1);
        io.emit('remove-user', {username: username});
    })
});

var api = express.Router();
require('./server/routes/api.js')(api);
app.use('/api', api);

app.get('/*', function(req, res) {
    res.render('index.ejs');
});

http.listen(port, function () {
    console.log('Server running on the port ' + port);
});