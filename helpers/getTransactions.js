const readlineSync = require('readline-sync');
const clear = require('./clear');

function getTransactions() {
  const transactions = [];
  let isAddingTransaction = true;

  while(isAddingTransaction) {
    clear();
    let transactionAmount;
    let currencyCode;
    let completedAt;

    while (transactionAmount === undefined) {
      const input = readlineSync.question('Enter the transaction amount: ').trim();
      if (input.length === 0) {
        console.log('Amount cannot be empty\n');
      } else {
        transactionAmount = input;
      }
    }

    while (currencyCode === undefined) {
      const input = readlineSync.question('Enter the transaction currency code: ').trim();
      if (input.length === 0) {
        console.log('Amount cannot be empty\n');
      } else {
        currencyCode = input;
      }
    }

    while (completedAt === undefined) {
      const input = readlineSync.question('Enter a timestamp for when the transaction was completed: ').trim();
      if (input.length === 0) {
        console.log('timestamp cannot be empty\n');
      } else {
        completedAt = input;
      }
    }

    transactions.push({
      amount: {
        amount: transactionAmount,
        currency_code: currencyCode
      },
      amount_local: {
        amount: transactionAmount,
        currency_code: currencyCode
      },
      completed_at: completedAt
    });

    const input = readlineSync.question('Would you like to add another transaction? (y/n): ').trim();
    if (input.toLowerCase() !== 'y' && input.toLowerCase() !== 'yes' ) {
      isAddingTransaction = false;
    }
  }

  return transactions;
}

module.exports = getTransactions;