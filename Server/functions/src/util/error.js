const errorHandling = require('../middleware/error');
// Generic Error Handling Middleware
module.exports = (app) => {
    app.use(errorHandling.notFound);
    app.use(errorHandling.catchAll);
    return app;
}