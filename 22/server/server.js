var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

app.use(function (req, res, next) {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
   res.setHeader('Access-Control-Allow-Credentials', true);
   next();
});

const port = 3010;

app.listen(port, function () {
   console.log(`Example app listening on port http://localhost:${port}/`);
});

//------------------------------------------- end config ------------------------------------------

app.get('/countries', function (req, res) {

   fs.readFile('./DataBase/DB.json', 'utf-8', function (error, data) {
      const dataBase = JSON.parse(data);
      const arrCountries = dataBase.country;
      const countriesName = arrCountries.map(country => country.name);
      res.status(200).send(JSON.stringify(countriesName));
   })

});

app.get('/cities', function (req, res) {
   const {activeCountry} = req.query;

   fs.readFile('./DataBase/DB.json', 'utf-8', function (error, data) {
      const dataBase = JSON.parse(data);
      const arrCountries = dataBase.country;
      const country = arrCountries.find(country => country.name === activeCountry);
      const citiesList = country.city.map(city => city.name);
      res.status(200).send(JSON.stringify(citiesList));
   })

});

app.get('/streets', function (req, res) {
   const { activeCountry, activeCity } = req.query;

   fs.readFile('./DataBase/DB.json', 'utf-8', function (error, data) {
      const dataBase = JSON.parse(data);
      const arrCountries = dataBase.country;
      const country = arrCountries.find(country => country.name === activeCountry);
      const targetCity = country.city.find(city => city.name === activeCity);
      const streetsList = targetCity.street.map(street => street.name);
      res.status(200).send(JSON.stringify(streetsList));
   })

})

