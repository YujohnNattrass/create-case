const readlineSync = require('readline-sync');
const clear = require('./clear');
const getFilingData = require('./getFilingData');

function getFilings() {
  const filings = [];
  let isAddingFiling = true;

  while (isAddingFiling) {
    clear();
    let jurisdiction;
    let workflow;
    let filingData;

    while (jurisdiction === undefined) {
      const input = readlineSync.question('Enter the filing\'s Jurisdiction: ').trim();
      if (input.length === 0) {
        console.log('Jurisdiction cannot be empty\n');
      } else {
        jurisdiction = input;
      }
    }

    while (workflow === undefined) {
      const input = readlineSync.question('Enter the filing\'s workflow: ').trim();
      if (input.length === 0) {
        console.log('workflow cannot be empty\n');
      } else {
        workflow = input;
      }
    }

    filingData = getFilingData();

    filings.push({
      jurisdiction,
      workflow,
      filing_data: filingData
    });

    const input = readlineSync.question('Would you like to add another filing? (y/n): ').trim();
    if (input.toLowerCase() !== 'y' && input.toLowerCase() !== 'yes' ) {
      isAddingFiling = false;
    }
  }

  return filings;
}

module.exports = getFilings;