const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const mainRoutes = require('./routes/main');
// const authRoutes = require('./routes/auth');
const errorHandling = require('./middleware/error');

const app = express();

// To ensure localhost isn't ratelimited
app.set('trust proxy', 1);

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Routes are declared here
app.use('/', mainRoutes);
// app.use('/admin', authRoutes);

// Generic Error Handling Middleware
app.use(errorHandling.notFound);
app.use(errorHandling.catchAll);

module.exports = app;