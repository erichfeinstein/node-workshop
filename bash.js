const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');
const req = require('./curl.js');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if (cmd === 'pwd') pwd(done);
  if (cmd === 'ls') ls(done);
  else if (cmd.substr(0, cmd.indexOf(' ')) === 'curl') {
    req(cmd.substr(cmd.indexOf(' ') + 1), done);
  } else if (cmd.substr(0, cmd.indexOf(' ')) === 'cat') {
    cat(cmd.substr(cmd.indexOf(' ') + 1), done);
  } else {
    process.stdout.write('You typed: ' + cmd);
  }
});

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
}
