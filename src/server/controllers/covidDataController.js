const covid = require('novelcovid');
const path = require('path');
const fs = require('fs');
covid.settings({
    baseUrl: 'https://disease.sh' | 'https://api.caw.sh' | 'https://corona.lmao.ninja'
})
const getAllData = async () => JSON.stringify(await covid.getAll());

const getCountryData = async country => JSON.stringify(await covid.getCountry({ country }));

const getAllCountryData = async () => JSON.stringify(await covid.getCountry({ sort: 'cases' }));

module.exports = {
    getAllData,
    getCountryData,
    getAllCountryData
}
