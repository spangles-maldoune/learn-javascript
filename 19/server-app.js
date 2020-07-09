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

const port = 3003;

app.listen(port, function () {
   console.log(`Example app listening on port http://localhost:${port}/`);
});

//------------------------------------------- end config ------------------------------------------

let tempArray = [];

app.post('/set-user-info', function (req, res) {
   const jsonString = JSON.stringify(req.body);
   const parseObjectFromServer = JSON.parse(jsonString);
   tempArray.push(parseObjectFromServer);

   fs.readFile('./users.json', 'utf8', (err, data) => {
      const userDataArray = JSON.parse(data);
      const secretKey = userDataArray
         .map((userData) => userData.secretKey)
         .find((secretKey) => secretKey === parseObjectFromServer.secretKey);

      if (secretKey) {
         res.status(301).send('Пользватель уже существует');
      } else {
         fs.writeFile('./users.json', JSON.stringify(tempArray), err => {
            if (err) {
               console.log('Error writing file', err)
            } else {
               console.log('Successfully wrote file')
            }
         });
         res.status(200).send('Ok');
      }
   });

})
