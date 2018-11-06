const fs = require('fs');

module.exports = (file, done) => {
  fs.readFile(file, function(err, data) {
    if (err) done('error!');
    else done(data.toString());
  })
}
