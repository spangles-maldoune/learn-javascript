// Есть обьект obj = {} Внутри него описываем методы copy, clear, doFunction. Организовать создание методов так,
// что бы можно было вызывать любые комбинации:

// obj.doFunction(sum, 2, 4).doFunction(mul, 6, 3).clear()

// doFunction(func, x, y); получает параметрами 2 числа и функцию, которую нужно применить к x и y.
// Результат операции сохранять в obj.result

// clear() очищает значение obj.result в 0

// copy(buffer) получает параметром название ключа buffer(string) и добавляет его к obj 
// Далее в любом порядке можно вызывать комбинации функций

// Создать метод target(property) - дальнейшие действия функций doFunction() и clear() будут изменять значение не result,
// а переданной property

// Пример: obj.doFunction(sum, 2, 4).copy('some_name').target('another_some_name').doFunction(mul, 6, 3)



function sum(x, y) {
   return x + y;
}

function mul(x, y) {
   return x * y;
}

let obj = {
   resultName: "result",
   doFunction: function (func, x, y) {
      this[this.resultName] = func(x, y);
      return this;
   },
   copy: function (buffer) {
      this[buffer] = this.result;
      return this;
   },
   clear: function () {
      this[this.resultName] = 0;
      return this;
   },
   target: function (property) {
      this.resultName = property
      return this;
   }
}


obj.doFunction(sum, 2, 4).copy('resulrTwo').target('newBuff').doFunction(mul, 6, 3).target('qwer').clear()
console.log(obj, 'obj');



// в обьекте data существует метод addRecord, который аргументами получает любой набор объектов.
// Метод addRecord добавляет все свойства переданных объектов в data.

//    data = {
//    addRecord: function () { },
//    p: 600,
//    str: 'hello',
//    y: -50
// }
// data.addRecord({ x: 10 }, { y: 20 }, { z: 30, x: 50 });
// data.x // 50
// data.y // 20
// data.z // 30
// data.p // 600
// data.str // 'hello'


var data = {
   addRecord: function () {
      for (var i = 0; i < arguments.length; i++) {
         if (typeof (arguments[i]) === 'object') {
            for (var key in arguments[i]) {
               if (arguments[arguments.length - 1] === true && this[key]) {
                  continue;
               } else {
                  this[key] = arguments[i][key];
               }
            }
         }
      }
   },
   p: 600,
   srt: 'hello',
   y: -50
}

data.addRecord({ x: 10 }, { y: 20 }, { z: 30, x: 50 });
data.addRecord({ p: 100 }, false);

console.log(data)