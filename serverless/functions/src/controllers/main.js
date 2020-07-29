const admin = require('firebase-admin');
admin.initializeApp();

exports.getHeader = (req, res) => {
    try {
        const ref = dbRef('header');
        sendResponse(ref, res);
    } catch (err) {
        sendError(res, err);
    }
}

exports.getProjects = (req, res) => {
    try {
        const ref = dbRef('projects');
        sendResponse(ref, res);
    } catch (err) {
        sendError(res, err);
    }
}

exports.getContact = (req, res) => {
    try {
        const ref = dbRef('contact');
        sendResponse(ref, res);
    } catch (err) {
        sendError(res, err);
    }
}

exports.getAll = (req, res) => {
    try {
        const ref = dbRef();
        sendResponse(ref, res);
    } catch (err) {
        sendError(res, err);
    }
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

const sendError = (res, error) => {
    res.status(500);
    const response = error.response || {};
    res.send({
        message: error.message,
        response
    })
}