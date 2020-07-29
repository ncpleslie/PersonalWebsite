const {
    validationResult
} = require('express-validator');

exports.notFound = (req, res, next) => {
    res.status(404);
    const error = new Error('Not Found');
    next(error);
}

exports.catchAll = (error, req, res, next) => {
    const status = error.statusCode !== 200 ? res.statusCode : 500;
    const message = error.message;
    const data = process.env.NODE_ENV === 'production' ? '' : error.data
    res.status(status).json({
        message: message,
        data: data
    });
}

exports.validationError = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed. Entered data is incorrect');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }
    next();
}