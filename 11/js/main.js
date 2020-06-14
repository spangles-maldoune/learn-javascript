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
   this.obj = {
      x: 0,
      y: 0,
      znak: ''
   };

   this.valueMass = {
      '+': function (obj) { return obj.x + obj.y },
      '-': function (obj) { return obj.x - obj.y },
      '*': function (obj) { return obj.x * obj.y },
      '/': function (obj) { return obj.x / obj.y },
      '%': function (obj) { return obj.x % obj.y },
   };

   this.check = function (obj) {
      this.obj = obj;
      var conf = confirm('Произвести действие ' + obj.x + ' ' + obj.znak + ' ' + obj.y + ' ?');

      if (conf === true) {
         var result = this.mathDo(this.valueMass, obj);
         alert(result);
      } else {
         this.input();
      }

   }

   this.input = function () {
      this.obj.x = +prompt('Введите новые данные x:', ' ');
      this.obj.y = +prompt('Введите новые данные y:', ' ');
      this.obj.znak = prompt('Введите новые данные znak:', ' ');
      var _stopIfCheck = true;

      while (_stopIfCheck) {

         if (this.valueMass[this.obj.znak]) {
            var result = this.mathDo(this.valueMass, obj);
            alert(result);
            _stopIfCheck = false;
         } else {
            this.obj.znak = prompt('Некорректный ввод математического действия. Введите один из следующих знаков: ' + Object.keys(this.valueMass), ' ');
         }

      }

   }

}

SuperMath.prototype.mathDo = function (valueMass, obj) {
   var operation = valueMass[obj.znak];
   return operation(obj);
}

var p = new SuperMath();

p.check(obj);