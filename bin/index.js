/*
Author: Chase Quinn
*/

const express = require('express');
const app = express();

const counterModel = require('./db/counter');
const counterArchiveModel = require('./db/archive');

counterModel.sync();
counterArchiveModel.sync();

app.use(express.static('./bin/static'));
app.set('views', './bin/views');
app.set('view engine', 'pug');

const appRoute = require('./routes/appRoute');
const counterUpdater = require('./routes/counterUpdater');
const calc = require('./routes/calc');

app.use('/', appRoute);
app.use('/counter', counterUpdater);
app.use('/calc', calc);

module.exports = app;