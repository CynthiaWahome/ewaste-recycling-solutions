const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URL } = require('./config/secrets.config');
const errorHandler = require('./middleware/errorHandler.middleware');
const logger = require('./middleware/log.middleware');
const statusRouter = require('./routes/status.route');

const app = express();

app.use(express.json());
app.use(logger);
app.use('/api/v1/status', statusRouter);

// the error handler has to be the very last middleware
app.use(errorHandler);
mongoose.connect(MONGO_URL).then(() => console.log('Connected to MongoDB'));

module.exports = app;
