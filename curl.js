const requester = require('request');

function request(url, callback) {
  requester(url, function(error, response, body) {
    if (error) throw error;
    if (response.statusCode !== 200) console.log('HTTP response code bad');
    else console.log(body);
  });
}

module.exports = request;
