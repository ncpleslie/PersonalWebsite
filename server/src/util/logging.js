const path = require('path');
var rfs = require('rotating-file-stream')

module.exports = rfs.createStream('access.log', {
    interval: '1d',
    path: path.join(__dirname, '../log')
});