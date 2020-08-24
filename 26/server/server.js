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

app.post('/new-registration', function (req, res) {
   const dataToWrite = JSON.stringify(req.body);
   appendFile('./models/auth.json', dataToWrite)
      .then(() => {
         res.status(200).send({success: true});
      })
})

app.get("/sign-in", function(req, res) {
  readFile('./models/auth.json')
      .then((json) => {
         const data = JSON.parse(json);
         const status = data.isAuthorized ? 200 : 401;

         res.status(status).send(data);
      })
});

function readFile(path, callback) {
   return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf-8', (error, data) => {
         resolve(data);
      })
   })
}

function appendFile(path, appendData, callback) {
   return new Promise((resolve, reject) => {
      fs.appendFile(path, appendData, 'utf-8', (error) => {
         if(error) {
            console.log(error)
         } else {
            console.log('Successfully wrote file');
         }
      })
   })
}


app.get('/data-server', function (request, response) {
   fs.readFile('./db.json', 'utf-8', function (error, data) {
      const productsData = JSON.parse(data);

      if(productsData) {
         response.status(200).send(productsData);
      }

   })
})


