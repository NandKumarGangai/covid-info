const express = require('express');
var bodyParser = require('body-parser')
const cors = require('cors')
const {
    getAllData,
    getCountryData,
    getAllCountryData
} = require('./controllers/covidDataController');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/get-all-data', (req, res) => {
    getAllData()
        .then(data => res.status(200).send({
            data
        }))
        .catch(err => {
            console.error('Error: ', err);
            res.status(200).send({
                data: []
            })
        });
});

app.post('/get-country-data', (req, res) => {
    console.log('body: ', req.body);
    getCountryData(req.body.country)
        .then(data => res.status(200).send({
            data
        }))
        .catch(err => {
            console.error('Error: ', err);
            res.status(200).send({
                data: []
            })
        });
});

app.get('/get-all-country-data', (req, res) => {
    getAllCountryData()
        .then(data => res.status(200).send({
            data
        }))
        .catch(err => {
            console.error('Error: ', err);
            res.status(200).send({
                data: []
            })
        });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}....`));
