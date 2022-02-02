const readlineSync = require('readline-sync');
const clear = require('./clear');

function getCaseName() {
  clear();
  let name;
  while (name === undefined) {
    const input = readlineSync.question('Enter a case name: ').trim();

    if (input.length === 0) {
      console.log('Case name cannot be empty\n');
    } else {
      name = input;
    }
  }

  return name;
}

module.exports = getCaseName;