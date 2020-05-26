// Написать функцию initSlider(size), которая вернет функционал предоставляющий возможность увеличевать или уменьшать счетчик.
// Передусмотреть валидацию: если счетчик стал равен size, то сбросить его на 0. Если счетчик равен 0, то установить его на size.
// Предусмотреть возможность сброса счетчика на 0.
// Предусмотреть возможность установки произвольного значения "n" счетчика, где n > 0, и n <= size,
// в случае установки значения n которое не прошло валидацию выдать в консоль ошибку.


function initSlider(size) {
   var count = 0;

   function valid(val) {
      return (val > 0 && val <= size);
   };

   return {
      up: function () {
         var result;
         if (count === size) {
            result = this.reset();
         } else {
            result = ++count;
         }
         return result;
      },
      down: function () {
         var result;
         if (count === 0) {
            result = this.set(size);
         } else {
            result = --count;
         }
         return result;
      },
      set: function (n) {
         if (valid(n)) {
            count = n;
         } else {
            throw new Error('Error!!!');
         }
         return count;
      },
      reset: function () {
         return count = 0;
      }
   }
}

var slider = initSlider(10);
console.log(slider.up());