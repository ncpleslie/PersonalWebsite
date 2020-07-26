const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

module.exports = () => {
    const app = express();
    // Middleware
    app.use(express.json());
    app.use(cors());
    app.use(helmet());
    return app;
}