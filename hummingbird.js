const readlineSync = require('readline-sync');
const getCaseName = require('./helpers/getCaseName');
const getCaseType = require('./helpers/getCaseType');
const getIndividuals = require('./helpers/getIndividuals');
const getFilings = require('./helpers/getFilings');
const { createCase } = require('./api');
const clear = require('./helpers/clear');
const formatCaseInputs = require('./helpers/formatCaseInputs');
const getTransactions = require('./helpers/getTransactions');

let isCreatingCase = true;
let newCase;
while(isCreatingCase) {
  const name = getCaseName();
  const type = getCaseType();
  const filings = getFilings();
  const individuals = getIndividuals();
  const transactions = getTransactions();
  const formatedInputs = formatCaseInputs(type, name, individuals, transactions, filings);

  clear();

  const input = readlineSync.question('Is the following case information correct? (y/n)\n' + formatedInputs).trim();
  if (input.toLowerCase() === 'y' || input.toLowerCase() === 'yes') {
    newCase = {
      case: {
        type,
        name,
        filings,
        individuals,
        transactions
      }
    }

    isCreatingCase = false
  } else {
    readlineSync.question('Please re-enter your information. Press any key to continue...');
  }
}

createCase(newCase)