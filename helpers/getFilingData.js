const readlineSync = require('readline-sync');
const clear = require('./clear');

function getFilingData() {
  let filingType;

  while (filingType === undefined) {
    const input = readlineSync.question('Enter the filing data\'s filing type: ').trim();
    if (input.length === 0) {
      console.log('Filing type cannot be empty\n');
    } else {
      filingType = input;
    }
  }

  return {
    filing_type: filingType,
  }
}

module.exports = getFilingData;