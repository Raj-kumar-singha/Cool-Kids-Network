const axios = require("axios");

async function generateRandomUser(email) {
    const response = await axios.get("https://randomuser.me/api/");
    const { name, location } = response.data.results[0];

    return {
        firstName: name.first,
        lastName: name.last,
        country: location.country,
        email,
    };
}

module.exports = generateRandomUser;
