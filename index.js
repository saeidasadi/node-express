require('dotenv').config(); // Sets up dotenv as soon as our application starts

const express = require('express');

const logger = require('morgan');

const bodyParser = require('body-parser');

const app = express();

const router = express.Router();

const environment = process.env.NODE_ENV; // development

const stage = require('./config')[environment];

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

if (environment !== 'production') {
    app.use(logger('dev'));
}

const routes = require('./routes/index.js');

app.use('/api/v1', routes(router));

app.listen(stage.port, stage.host, () => {
    console.log(`Server now listening at ${stage.host}:${stage.port}`);
});

module.exports = app;

