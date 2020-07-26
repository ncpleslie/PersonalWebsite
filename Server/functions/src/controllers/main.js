const admin = require('firebase-admin');
admin.initializeApp();

exports.getHeader = (req, res, next) => {
    const ref = dbRef('header');
    sendResponse(ref, res);
}

exports.getProjects = (req, res, next) => {
    const ref = dbRef('projects');
    sendResponse(ref, res);
}

exports.getContact = (req, res, next) => {
    const ref = dbRef('contact');
    sendResponse(ref, res);
}

exports.getAll = (req, res, next) => {
    const ref = dbRef();
    sendResponse(ref, res);
}

const dbRef = (reference) => {
    return admin.database().ref(reference);
}

const sendResponse = (ref, res) => {
    ref.once("value", (snapshot) => {
        res.status(200).json(
            snapshot.val()
        );
    });
}