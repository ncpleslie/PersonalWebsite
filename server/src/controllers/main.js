const profileData = require('../util/website_data').getProfileData();
/*
    All requests will return a basic JSON object
    containing an data declared above ("profileData").
*/
exports.getHeader = (req, res, next) => {
    res.status(200).json(
        profileData.header
    );
}

exports.getProjects = (req, res, next) => {
    res.status(200).json(profileData.projects);
}

exports.getContact = (req, res, next) => {
    res.status(200).json(profileData.contact);
}

exports.getAll = (req, res, next) => {
    res.status(200).json(
        profileData
    );
}