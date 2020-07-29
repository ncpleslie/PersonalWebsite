const mainController = require('./controllers/main');

const header = (req, res) => {
    mainController.getHeader(req, res);
}

const projects = (req, res) => {
    mainController.getProjects(req, res);
}

const contact = (req, res) => {
    mainController.getContact(req, res);
}

const all = (req, res) => {
    mainController.getAll(req, res);
}

module.exports = {
    header,
    projects,
    contact,
    all
};