const express = require('express');

const mainController = require('../controllers/main');

const router = express.Router();

// GET on localhost:port/
router.get('/head', mainController.getHead);
router.get('/projects', mainController.getProjects);
router.get('/contact', mainController.getContact);
router.get('/', mainController.getAll);

module.exports = router;