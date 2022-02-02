const readlineSync = require('readline-sync');
const clear = require('./clear.js');

function getCaseType() {
  clear();
  let type;

  while (type === undefined) {
    const input = readlineSync.question('Enter a case type: ').trim();

    if (input.length === 0) {
      console.log('Case type cannot be empty\n');
    } else {
      type = input;
    }
  }

  return type;
}

module.exports = getCaseType;