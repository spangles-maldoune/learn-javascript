// Создать класс new SuperArray(n, m, { min: 10, max: 55 }), который создаст массив размерностью n на m
// и заполнит случайными числами в диапазоне options.min - options.max. Массив сохраняется в екземпляр класса SuperArray.

// Создать метод render(separator), в прототипе. Который выведет двумерный массив в документ.
// С разделителем separator, под массивом.

// Создать метод clear(direction, k), где direction может быть "row" или "column", а k - номер строки или столбца,
// который нужно очистить. (поставить 0)

// Создать Метод setMarker({ x: 6, y: 9 }), который устанавливает маркер "&" в в переданную точку.

// Создать метод goTo({ x: 2, y: 4 }), маркер передвигается в указанную точку.

// Создать метод shift(direction), где direction может иметь значение "left", "right", "top", "bottom",
// и маркер сдвинется в указанную сторону на 1 шаг.


function SuperArray(n, m, { min, max }) {
   this.newArray = [];
   var pos = { x: 0, y: 0 };
   var temp;
   var marker = '&';

   // создание массива, со случайными числами
   for (var i = 0; i < n; i++) {
      this.newArray[i] = [];

      for (var j = 0; j < m; j++) {
         this.newArray[i][j] = Math.floor(Math.random() * (max - min) + min);
      }

   }

   // метод очистки строки или столбца (заполнение 0)
   this.clear = function (direction, k) {

      if (direction === 'row') {

         for (var i = 0; i < this.newArray[k].length; i++) {
            this.newArray[k][i] = 0;
         }
         console.log(this.newArray);

      } else if (direction === 'column') {

         for (var x = 0; x < this.newArray.length; x++) {
            this.newArray[x][k] = 0;
         }
         console.log(this.newArray);
      }

   }

   // внутренняя функция для валидации данных
   function validate(array, value) {
      return (value >= 0 && value < array.length)
   }

   // установка маркера в переданную точку
   this.setMarker = function (x, y) {

      if (validate(this.newArray, x) && validate(this.newArray[0], y)) {
         temp = this.newArray[x][y];
         pos.x = x;
         pos.y = y;
         return this.newArray[x][y] = marker;
      } else {
         throw new SyntaxError('Недопустимый диапазон значений!');
      }

   }

   // перемещение маркера в указанную точку
   this.goTo = function (x, y) {

      if (validate(this.newArray, x) && validate(this.newArray[0], y)) {
         this.newArray[pos.x][pos.y] = temp;
         this.newArray[x][y] = marker;
      } else {
         throw new SyntaxError('Недопустимый диапазон значений!');
      }

   }

   // перемещение маркера на один шаг в указанном направлении
   this.shift = function (direction) {

      if (direction === 'left') {
         this.newArray[pos.x][pos.y] = temp;
         return this.newArray[pos.x][--pos.y] = marker;
      } else if (direction === 'right') {
         this.newArray[pos.x][pos.y] = temp;
         return this.newArray[pos.x][++pos.y] = marker;
      } else if (direction === 'top') {
         this.newArray[pos.x][pos.y] = temp;
         return this.newArray[--pos.x][pos.y] = marker;
      } else if (direction === 'bottom') {
         this.newArray[pos.x][pos.y] = temp;
         return this.newArray[++pos.x][pos.y] = marker;
      }

   }


}

var mass = new SuperArray(6, 4, { min: 10, max: 55 });
console.log(mass);



// mass.clear('row', 1);

mass.setMarker(1, 1);
mass.shift('bottom');
mass.shift('bottom');
mass.shift('right');
mass.shift('right');
// mass.goTo(1, 2);


SuperArray.prototype.render = function (separator) {

   for (var i = 0; i < this.newArray.length; i++) {
      var temp = this.newArray;
      document.write(temp[i] + '<br>');
   }

   document.write(separator + '<br>');

}

mass.render('--------------');