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
   this.positions = {x:0, y:0}
   this.marker = "&"


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

   this.setMarker = function (x, y,) {

      if (validate(x,this.newArray)) {
         this.positions.x = x;
      } else if (validate(y,this.newArray[0])) {
         this.positions.y = y;
      } else {
         throw new SyntaxError('Недопустимый диапазон значений!');
      }
   }

   function validate(value, array) {
     return (value >= 0 && value < array.length)
   }

   this.getMarker = function () {
      return this.marker
   }

   this.goTo = function (x, y) {
      this.setMarker(x,y);
   }
}

var mass = new SuperArray(6, 4, { min: 10, max: 55 });
mass.
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


setInterval(function() {
   var inputs = document.querySelectorAll('.inputValue');
   var textarea = document.querySelector('.textArea');
   var tempCont = '';
   var separator = ', ';
   var maxSize = inputs.length - 1;


   // for (var i = 0; i < inputs.length - 1; i++) {
   //    if (inputs[i].value !== '' && inputs[i].value) {
   //       tempCont += inputs[i].value;
   //    } else {
   //       tempCont += inputs[i].value + separator;
   //    }
   // }
   
   // textarea.textContent = tempCont + inputs[maxSize].value;
   

   for (var i = 0; i < inputs.length; i++) {

      if (inputs[i] !== inputs[maxSize] && inputs[i + 1].value) {
         tempCont += inputs[i].value + separator;
      } else {
         tempCont += inputs[i].value;
      }

   }
   
   textarea.textContent = tempCont;
   
}, 3000)
