//Есть 3 input.Выводить в textarea содержимое всех полей ввода через запятую.Использовать setInterval.

var obj = {
   x: 12,
   y: 3,
   znak: '/'
};

function SuperMath() {

   this.obj = {
      x:0,
      y:0,
      znak:""
   }



   this.valueMass = {
      '+': function (obj) { return obj.x + obj.y},
      '-': function (obj) { return obj.x - obj.y},
      '*': function (obj) { return obj.x * obj.y},
      '/': function (obj) { return obj.x / obj.y},
      '%': function (obj) { return obj.x % obj.y},
   };

   this.check = function (obj) {
      this.obj = obj;
      var conf = confirm('Произвести действие ' + obj.x + ' ' + obj.znak + ' ' + obj.y + ' ?');

      if (conf === true) {
         this.mathDo(obj);
      } else {
         this.input();
      }

   }

   this.input = function () {
      this.obj.x = +prompt ('Введите новые данные x:', ' ');
      this.obj.y = +prompt('Введите новые данные y:', ' ');
      this.obj.znak = prompt('Введите новые данные znak:', ' ');
      var _stopIfCheck = true;

      while (_stopIfCheck) {
         if (this.valueMass[this.obj.znak]) {
            var result = this.mathDo(this.valueMass, obj);
            _stopIfCheck = false;
         } else {
            this.obj.znak = prompt('Некорректный ввод математического действия. Введите один из следующих знаков: ' + Object.keys( this.valueMass ), ' ');
         }

      }

   }

}

SuperMath.prototype.mathDo = function(valueMass, obj) {
   var operation = valueMass[obj.znak];
   return operation(obj);
}

var p = new SuperMath();

p.check(obj);



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

// app.get('/set-user-info', function (req, res) {
//    console.log('hello path /set-user-info');
//    res.send('Hello Node!');
// });
let tempArray = [];


app.post('/set-user-info', function (req, res) {
   const jsonString = JSON.stringify(req.body);
   const parseObjectFromServer = JSON.parse(jsonString);
   tempArray.push(parseObjectFromServer);

   let parseData =
   fs.readFile('./users.json', 'utf8', (data) => {
      const userDataArray = JSON.parse(data);
      let secretKey = userDataArray
          .map((userData) => userData.secretKey)
          .find((secretKey) => secretKey === parseObjectFromServer.secretKey);

      fs.writeFileSync('./users.json', JSON.stringify(tempArray));
      sendResult(secretKey, res)
   });

})


let sendResult = (secretKey, response) => {
   if (secretKey) {
      response.status(301).send('Пользватель уже существует');
   } else {
      response.status(200).send('Ok');
   }
}

