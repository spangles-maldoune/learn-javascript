let arr = [-4, -1, 0, 3, 10];
console.log(arr);
let temp;

for (let i = 0; i < arr.length; i++) {
	arr[i] *= arr[i];
}

for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr.length; j++) {
		if (arr[j] > arr[i]) {
			temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}
}

console.log(arr);


// Написать функцию initSlider(size), которая вернет функционал предоставляющий возможность увеличевать или уменьшать счетчик.
// Передусмотреть валидацию: если счетчик стал равен size, то сбросить его на 0. Если счетчик равен 0, то установить его на size.
// Предусмотреть возможность сброса счетчика на 0.
// Предусмотреть возможность установки произвольного значения "n" счетчика, где n > 0, и n <= size,
// в случае установки значения n которое не прошло валидацию выдать в консоль ошибку.

function initSlider(size) {
   return {
      count: 0,
      up: function () {
         if (this.count === size) {
            this.count = 0;
            return this.count;
         }
         ++this.count;
         console.log (this.count);
      },
      down: function () {
         if (this.count === 0) {
            this.count = size;
            return this.count;
         }
         --this.count;
         console.log (this.count);
      },
      set: function (n) {
         if (n > 0 && n <= size) {
            this.count = n;
            console.log (this.count);
         } else {
            console.log('Error!!!')
         }
      },
      reset: function () {
         console.log (this.count = 0);
      } 
   }
}

var slider = initSlider(10);
slider.up();
