const admin = require('firebase-admin');
admin.initializeApp();

// Returns the name of the site and links to github, linkedIn, etc
const header = (req, res) => {
    baseFunction(req, res, 'header');
}

// Returns an array of projects
const projects = (req, res) => {
    baseFunction(req, res, 'projects');
}

// Returns contact information, email, formspringURL
const contact = (req, res) => {
    baseFunction(req, res, 'contact');
}

// Return everything
const all = (req, res) => {
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

module.exports = {
    header,
    projects,
    contact,
    all
};