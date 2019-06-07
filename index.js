require('dotenv').config(); // Sets up dotenv as soon as our application starts

const express = require('express');

const logger = require('morgan');

const bodyParser = require('body-parser');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const router = express.Router();

const environment = process.env.NODE_ENV; // development

const stage = require('./config')[environment];

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('public'));

if (environment !== 'production') {
    app.use(logger('dev'));
}

app.set('view engine', 'pug');

app.set('views', './views');

const routes = require('./routes/index.js');

app.all('/api/*', function (req, res, next) {
    console.log('Using API');

    // res.end();

    next();
});

app.use(routes);

io.on('connection', function (socket) {
    console.log('a user connected');

    // console.log(socket);

    setTimeout(() => {
        socket.emit('hi everybody');
    }, 1000);

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);

        socket.broadcast.emit('chat message', msg);
    });
});

http.listen(stage.port, stage.host, () => {
    console.log(`Server now listening at ${stage.host}:${stage.port}`);
});

module.exports = app;

