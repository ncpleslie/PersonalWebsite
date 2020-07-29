const admin = require('firebase-admin');
admin.initializeApp();

exports.getHeader = (req, res) => {
    baseFunction(req, res, 'header');
}

exports.getProjects = (req, res) => {
    baseFunction(req, res, 'projects');
}

exports.getContact = (req, res) => {
    baseFunction(req, res, 'contact');
}

exports.getAll = (req, res) => {
    baseFunction(req, res);
}

// Base method for all functions
const baseFunction = (req, res, reference) => {
    res = cors(res);
    optionsRequest(req, res);
    try {
        const ref = dbRef(reference);
        sendResponse(ref, res);
    } catch (err) {
        sendError(res, err);
    }
}

// Return a reference to the Firebase RealTime database
const dbRef = (reference) => {
    return admin.database().ref(reference);
}

// Send a successful response with JSON data
const sendResponse = (ref, res) => {
    ref.once("value", (snapshot) => {
        res.status(200).json(
            snapshot.val()
        );
    });
}


// Send an unsuccessful response
const sendError = (res, error) => {
    res.status(500);
    const response = error.response || {};
    res.send({
        message: error.message,
        response
    })
}

// Add CORS headers to response
const cors = (res) => {
    res.setHeader('access-control-allow-origin', '*');
    res.setHeader('access-control-allow-methods', 'GET,OPTIONS');
    return res;
}

// If OPTIONS request return 200
const optionsRequest = (req, res) => {
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
}