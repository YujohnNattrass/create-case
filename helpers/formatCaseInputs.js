function formatCaseInputs(caseType, caseName, individuals, transactions, filings) {
  const formatedFilings = filings.map(filing => {
    return `
      Jurisdiction: ${filing.jurisdiction}
      Workflow: ${filing.workflow}
      Filing type: ${filing.filing_data.filing_type}
`
  }).join('');

  const formatedTransactions = transactions.map(transaction => {
    return`
      Amount: ${transaction.amount.amount}
      Currency: ${transaction.amount.currency_code}
      Created at: ${transaction.completed_at}
`
  }).join('');

  const info = `
    Case name: ${caseName}

    Case type: ${caseType}


    Individuals: ${individuals.map(person => `${person.first_name} ${person.last_name}`).join(', ')}

    Filings: ${formatedFilings}

    Transactions: ${formatedTransactions}`

  return info
}

module.exports = formatCaseInputs;