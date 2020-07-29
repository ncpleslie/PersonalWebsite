const admin = require('firebase-admin');
const serviceAccount = require(require('path').join(__dirname, "../../ncpleslie-api-firebase-adminsdk.json"));
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://ncpleslie-api.firebaseio.com"
});

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