const requester = require('request');

module.exports = (url, done) => {
  requester(url, function(error, response, body) {
    if (error) done(error);
    if (response.statusCode !== 200) done('HTTP response code bad');
    else done(body);
  });
}
