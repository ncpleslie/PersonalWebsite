let profileData;

module.exports = {
    init: websiteData => {
        profileData = JSON.parse(require('fs').readFileSync(require('path').join(__dirname, websiteData)));
    },
    getProfileData: () => {
        if (!profileData) {
            throw new Error('Profile Data not initialized');
        }
        return profileData;
    }
};