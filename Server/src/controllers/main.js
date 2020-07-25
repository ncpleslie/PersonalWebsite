const profileData = require('../websiteData').getProfileData();
/*
    All requests will return a basic JSON object
    containing an data declared above ("profileData").
*/
exports.getHead = (req, res, next) => {
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