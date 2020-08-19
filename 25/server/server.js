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

app.get('/data-server', function (request, response) {
   fs.readFile('./db.json', 'utf-8', function (error, data) {
      const productsData = JSON.parse(data);

      if(productsData) {
         response.status(200).send(productsData);
      }

   })

})


