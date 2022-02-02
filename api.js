const axios = require('axios');
require('dotenv').config();
const token = process.env.TOKEN;
const apiUrl = process.env.API_URL;

function createCase(newCase) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      Accept: 'application/json'
    }
  }

  axios.post(`${apiUrl}/cases`, JSON.stringify(newCase), config)
    .then(({ data }) =>{
      let message;
      if (data.success) {
        message = data.notice;
      } else {
        const error = data.error;
        message = `Something went wrong! Read the following message:
  Error type: ${error.type}
  Error message: ${error.message}`;
      }

      console.log(message)
    }).catch(err => {
      const error = err.response.data.error;
      const message = `Something went wrong! Read the following message:
        Error type: ${error.type}
        Error message: ${error.message}`;

      console.log(message)
    })
}

module.exports = { createCase }