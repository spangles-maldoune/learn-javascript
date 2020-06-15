// Создать класс SuperMath. Добавить к экземпляру метод - check(obj), 
// параметр obj которого имеет свойства X, Y, znak.
// Метод должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У.
// Если - да, сделать математическое действие znak(которое описано в прототипе), 
// иначе - запросить ввод новых данных через метод input() класса SuperMath.
// Пример обекта: obj = { X: 12, Y: 3, znak: “/”}, возможные варианты znak => + - / * %. 
// При вводе znak нужно сделать проверку корректности ввода на возможные математические действия
// p = new SuperMath();
// p.check(obj); // --> no p.input() -> 3 prompt -> считает


var obj = {
   x: 12,
   y: 3,
   znak: '/'
};

function SuperMath() {

   this.check = function (obj) {
      var conf = confirm('Произвести действие ' + obj.x + ' ' + obj.znak + ' ' + obj.y + ' ?');

      if (conf === true) {
         this.mathDo(obj);
      } else {
         this.input();
      }

   }

   this.input = function () {
      obj.x = +prompt('Введите новые данные x:', ' ');
      obj.y = +prompt('Введите новые данные y:', ' ');
      obj.znak = prompt('Введите новые данные znak:', ' ');
      this.mathDo(obj);
   }

}

SuperMath.prototype.mathDo = function (obj) {

   var valueMass = {
      '+': function (obj) { return obj.x + obj.y },
      '-': function (obj) { return obj.x - obj.y },
      '*': function (obj) { return obj.x * obj.y },
      '/': function (obj) { return obj.x / obj.y },
      '%': function (obj) { return obj.x % obj.y },
   };
   var _stopIfCheck = true;

   while (_stopIfCheck) {

      if (valueMass[obj.znak]) {
         var operation = valueMass[obj.znak];
         alert(operation(obj));
         _stopIfCheck = false;
      } else {
         obj.znak = prompt('Некорректный ввод математического действия. Введите один из следующих знаков: ' + Object.keys(valueMass), ' ');
      }

   }

}

var p = new SuperMath();

p.check(obj);