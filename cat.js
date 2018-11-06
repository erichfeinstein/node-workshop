const fs = require('fs');

function cat(file) {
  fs.readFile(file, function(err, data) {
    if (err) throw err;
    else console.log(data.toString());
  })
}

module.exports = cat;
