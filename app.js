'use strict';

const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';

const express = require('express');
const app = express();
const es6Renderer = require('express-es6-template-engine');

app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is runnning at http://${hostname}:${port}`);
});

const rootController = require('./routes/index');
const ceoController = require('./routes/ceos');

app.use('/', rootController);
app.use('/ceos', ceoController);