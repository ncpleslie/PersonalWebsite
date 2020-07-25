const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const mainRoutes = require('./routes/main');
// const authRoutes = require('./routes/auth');
const errorHandling = require('./middleware/error');

// const logging = require('./util/logging');

const app = express();

// To ensure localhost isn't ratelimited
app.set('trust proxy', 1);

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
// app.use(morgan('combined', {
//     stream: logging
// }));

// Routes are declared here
app.use('/', mainRoutes);
// app.use('/admin', authRoutes);

// Generic Error Handling Middleware
app.use(errorHandling.notFound);
app.use(errorHandling.catchAll);

// Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).catch(err => {
//     console.log(err);
// })

module.exports = app;