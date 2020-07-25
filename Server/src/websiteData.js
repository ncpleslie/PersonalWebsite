let profileData;

module.exports = {
    init: websiteData => {
        profileData = JSON.parse(require('fs').readFileSync(require('path').join(__dirname, websiteData)));
        return profileData;
    },
    getProfileData: () => {
        if (!profileData) {
            throw new Error('Profile Data not initialized');
        }
        return profileData;
    }
};