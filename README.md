# Create a case

This small node program only takes in the required minimum information to create a case.

The required information are:

- Case type
- Case name
- At least 1 filing
- At least 1 person
- At least 1 transaction

Each Filing requires the following:

- Jurisdiction
- Workflow
- Filing type

Each person requires the following:

- First name
- Last name

Each transaction requires the following:

- Amount
- Currency
- Time when transaction was created (timestamp format)

Instructions to start:

1. npm install
2. create an .env file and add in the api url as API_URL and the token as TOKEN
3. start with the command `node hummingbird.js`
