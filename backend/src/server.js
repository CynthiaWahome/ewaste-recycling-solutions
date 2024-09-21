const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URL } = require('./config/secrets.config');
const errorHandler = require('./middleware/errorHandler.middleware');
const logger = require('./middleware/log.middleware');
const authRouter = require('./auth/auth.route');
const statusRouter = require('./routes/status.route');
const supportRouter = require('./routes/support.route.js');

const app = express();
app.use(cors());

app.use(express.json());
app.use(logger);
app.use('/api/v1/status/', statusRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/support', supportRouter);

// the error handler has to be the very last middleware
app.use(errorHandler);
mongoose.connect(MONGO_URL).then(() => console.log('Connected to MongoDB'));

module.exports = app;
