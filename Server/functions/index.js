const functions = require('firebase-functions');
require('./src/websiteData').init('website_data.json');
const app = require('./src/app');

exports.api = functions.https.onRequest(app);