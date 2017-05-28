// const request = require('request');
// const download = require('image-downloader');
const readImage = require('./read-image');
const urlencode = require('urlencode');

function getImage(path, callback) {
    readImage(path, result => {
        callback(result);
    });  
}

module.exports = getImage;
