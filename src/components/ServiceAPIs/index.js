const covid = require('novelcovid');
const axios = require('axios');

const indiaStateWiseAPI = 'https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise';

export const getAllData = async () => JSON.stringify(await covid.getAll());

export const getCountryData = async country => JSON.stringify(await covid.getCountry({ country }));

export const getAllCountryData = async () => JSON.stringify(await covid.getCountry({ sort: 'cases' }));

export const getIndiaStateWiseData = async () => fetchStateWiseData();

const fetchStateWiseData = () => axios.get(indiaStateWiseAPI)
    .then(res => res.data)
    .catch(err => console.log(err));
