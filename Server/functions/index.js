const functions = require('firebase-functions');
const {
    header,
    projects,
    contact,
    all
} = require('./src/app');

exports.header = functions.https.onRequest(header);
exports.projects = functions.https.onRequest(projects);
exports.contact = functions.https.onRequest(contact);
exports.all = functions.https.onRequest(all);