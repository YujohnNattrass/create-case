const readlineSync = require('readline-sync');
const clear = require('./clear');

function getIndividuals() {
  const individuals = [];
  let isAddingPerson = true;

  while (isAddingPerson) {
    clear();
    const person = {};
    let firstName;
    let lastName;

    while (firstName === undefined) {
      const input = readlineSync.question('Enter an individual\'s first name: ').trim();
      if (input.length === 0) {
        console.log('First name cannot be empty\n');
      } else {
        firstName = input;
      }
    }

    while (lastName === undefined) {
      const input = readlineSync.question('Enter an individual\'s last name: ').trim();
      if (input.length === 0) {
        console.log('Last name cannot be empty\n');
      } else {
        lastName = input;
      }
    }

    individuals.push({
      first_name: firstName,
      last_name: lastName
    })

    const input = readlineSync.question('Would you like to add another person? (y/n): ').trim();
    if (input.toLowerCase() !== 'y' && input.toLowerCase() !== 'yes' ) {
      isAddingPerson = false;
    }
  }

  return individuals;
}

module.exports = getIndividuals;