// задача называется, найти пропущенный диапазон:
// пример, вот на входи массив и два числа
// Input: nums = [0, 1, 3, 50, 75], lower = 0 and upper = 99,
// 	вот какой должен быть вывод
// Output: ["2", "4->49", "51->74", "76->99"]



let input = [0, 1, 3, 50, 75],
	lower = 0,
	upper = 99,
	output = [];

for (let i = lower; i <= upper; i++) {
	if (input.indexOf(i) < 0) {
		output[output.length] = i;
	}
}

console.log(output);




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
   
   for (var i = 0; i < n; i++) {
      this.newArray[i] = [];

      for (var j = 0; j < m; j++) {
         this.newArray[i][j] = Math.floor(Math.random() * (max - min) + min);
      }

   }

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

   this.setMarker = function (x, y) {
      var _tempMarker;

      if (x >= 0 && y >= 0 && x < this.newArray.length && y < this.newArray[0].length) {
         _tempMarker = this.newArray[x][y];
         this.newArray[x][y] = '&';
         
      } else {
         throw new SyntaxError('Недопустимый диапазон значений!');
      }

      this.getMarker = function () {
         return _tempMarker;
      }
      console.log(getMarker(), 'marker');

      return this.newArray;
      
   }

   this.goTo = function (x, y) {
      this.newArray[x][y] = '&';
      return this.newArray;
      
      
   }

  
  
}

var mass = new SuperArray(6, 4, { min: 10, max: 55 });
console.log (mass);



// mass.clear('column', 1);

console.log(mass.setMarker(0, 0));
console.log (mass.goTo(3, 2));


SuperArray.prototype.render = function (separator) {

   for (var i = 0; i < this.newArray.length; i++) {
      var temp = this.newArray;
      document.write (temp[i] + '<br>');
   }

   document.write (separator + '<br>');
   
}

mass.render('--------------');
