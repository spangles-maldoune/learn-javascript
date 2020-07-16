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

const port = 3005;

app.listen(port, function () {
   console.log(`Example app listening on port http://localhost:${port}/`);
});

//------------------------------------------- end config ------------------------------------------

app.post('/user-sign', function (request, response) {
   let dataFromClient = JSON.parse(request.body);

   fs.readFile('./users.json', 'utf-8', function (error, data) {
      let dataBase = JSON.parse(data);
      let userData = dataBase.find(({ login, password }) => login === dataFromClient.login && password === dataFromClient.password);

      if (userData) {
         response.status(200).send(JSON.stringify(userData.id));
      } else {
         response.status(401).send();
      }

   });
   
});

app.post('/user-products', function (request, response) {
   let clientId = JSON.parse(request.body);
   let urlToJson = './goods/' + clientId + '.json';

   fs.readFile(urlToJson, function (error, productsData) {
      let clientProduct = JSON.parse(productsData);
      response.send(clientProduct);
   })
})

