const covid = require('novelcovid');
const path = require('path');
const fs = require('fs');

const getAllData = async () => JSON.stringify(await covid.getAll());

const getCountryData = async country => JSON.stringify(await covid.getCountry({ country }));

const getAllCountryData = async () => JSON.stringify(await covid.getCountry({ sort: 'cases' }));

module.exports = {
    getAllData,
    getCountryData,
    getAllCountryData
}
