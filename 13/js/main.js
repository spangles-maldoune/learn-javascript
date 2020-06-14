//Есть 3 input.Выводить в textarea содержимое всех полей ввода через запятую.Использовать setInterval.

var obj = {
   x: 12,
   y: 3,
   znak: '/'
};

function SuperMath() {
   this.valueMass = {
      '+': obj.x + obj.y,
      '-': obj.x - obj.y,
      '*': obj.x * obj.y,
      '/': obj.x / obj.y,
      '%': obj.x % obj.y,
   };
  
   this.check = function (obj) { 
      var conf = confirm('Произвести действие ' + obj.x + ' ' + obj.znak + ' ' + obj.y + ' ?');

      if (conf === true) {
         this.mathDo();
      } else {
         this.input();
      }
      
   }

   this.input = function () {
      obj.x = +prompt ('Введите новые данные x:', ' ');
      obj.y = +prompt('Введите новые данные y:', ' ');
      obj.znak = prompt('Введите новые данные znak:', ' ');
      var _stopIfCheck = true;

      while (_stopIfCheck) {
         
         if (this.valueMass[obj.znak]) {
            this.mathDo.call(obj);
            _stopIfCheck = false;
         } else {
            obj.znak = prompt('Некорректный ввод математического действия. Введите один из следующих знаков: +, -, /, *, %', ' ');
         }
         
      }
      
   }

}

SuperMath.prototype.mathDo = function() {
   // var valueMass = {
   //    '+': obj.x + obj.y,
   //    '-': obj.x - obj.y,
   //    '*': obj.x * obj.y,
   //    '/': obj.x / obj.y,
   //    '%': obj.x % obj.y,
   // };

   alert(this.valueMass[obj.znak]);
}

var p = new SuperMath();

p.check(obj);
