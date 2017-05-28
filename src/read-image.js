const Tesseract = require('tesseract.js');

function readImage(path, callback) {
  Tesseract.recognize(path)
  .then(function(result){
      callback(result.text);
  });
}

module.exports = readImage;
