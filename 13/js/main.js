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
