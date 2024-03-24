const axios = require('axios');
axios
.post('https://myfakeapi.com/api/users/', {
firstName: 'Boris',
lastName: 'Moore'
}) // Using a post request, specifying the user
.then((response) => { // Data retrieval and processing
console.log(response.data);})
.catch((error) => { // If the query fails, an error will be displayed on the terminal.
console.error(error);});