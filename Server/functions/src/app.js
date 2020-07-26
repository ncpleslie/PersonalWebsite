require('dotenv').config();

const app = require('./util/app');
const errorHandling = require('./util/error');

// const mainRoutes = require('./routes/main');
const mainController = require('../controllers/main');
// const authRoutes = require('./routes/auth');

// Routes are declared here
let header = app();
header.use('/header', mainController.getHeader);
header = errorHandling(header);
let projects = app();
projects.use('/projects', mainController.getProjects);
projects = errorHandling(projects);
let contact = app();
contact.use('/contact', mainController.getContact);
contact = errorHandling(contact);
let all = app();
all.use('/', mainController.getAll);
all = errorHandling(all);

// Transitioning away from regular NodeJS Express server to cloud functions
// app.use('/', mainRoutes);
// app.use('/admin', authRoutes);

module.exports = {
    header,
    projects,
    contact,
    all
};