/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');


// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, file) => {
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      var result = file.split('\n')[0];
      callback(err, result);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request(url, (err, res) => {
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      callback(null, res.statusCode);
    }
  });
};
// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
