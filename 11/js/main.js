// Создать класс SuperMath. Добавить к экземпляру метод - check(obj), 
// параметр obj которого имеет свойства X, Y, znak.
// Метод должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У.
// Если - да, сделать математическое действие znak(которое описано в прототипе), 
// иначе - запросить ввод новых данных через метод input() класса SuperMath.
// Пример обекта: obj = { X: 12, Y: 3, znak: “/”}, возможные варианты znak => + - / * %. 
// При вводе znak нужно сделать проверку корректности ввода на возможные математические действия
// p = new SuperMath();
// p.check(obj); // --> no p.input() -> 3 prompt -> считает


function SuperMath() {

   this.check = function (obj) {

      var conf = confirm('Произвести действие ' + obj.x + ' ' + obj.znak + ' ' + obj.y + ' ?');

      var valueMass = {
         '+': obj.x + obj.y,
         '-': obj.x - obj.y,
         '*': obj.x * obj.y,
         '/': obj.x / obj.y,
         '%': obj.x % obj.y,
      };

      if (conf === true) {
         for (var key in valueMass) {
            if (obj.znak === key) {
               alert(valueMass[key]);
            }
         }
      } else {
         this.input();
      }

   }

   this.input = function () {

      var x = +prompt('Введите новые данные x:', ' ');
      var y = +prompt('Введите новые данные y:', ' ');
      var znak = prompt('Введите новые данные znak:', ' ');
      var flag = false;
      var checkIfStop = true;

      var valueMass = {
         '+': x + y,
         '-': x - y,
         '*': x * y,
         '/': x / y,
         '%': x % y,
      };

      while (checkIfStop) {
         for (var key in valueMass) {
            if (key === znak) {
               flag = true;
            }
         }

         if (flag) {
            alert(valueMass[znak]);
            checkIfStop = false;
         } else {
            znak = prompt('Некорректный ввод математического действия. Введите один из следующих знаков: +, -, /, *, %', ' ');
         }

      }

   }

}

var p = new SuperMath();

var obj = {
   x: 12,
   y: 3,
   znak: '/'
};

p.check(obj)