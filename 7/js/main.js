// Написать функцию initSlider(size), которая вернет функционал предоставляющий возможность увеличевать или уменьшать счетчик.
// Передусмотреть валидацию: если счетчик стал равен size, то сбросить его на 0. Если счетчик равен 0, то установить его на size.
// Предусмотреть возможность сброса счетчика на 0.
// Предусмотреть возможность установки произвольного значения "n" счетчика, где n > 0, и n <= size,
// в случае установки значения n которое не прошло валидацию выдать в консоль ошибку.


function initSlider(size) {
   var count = 0;
   return {
      up: function () {
         if (count === size) {
            count = 0;
            return count;
         }
         ++count;
         console.log(count);
      },
      down: function () {
         if (count === 0) {
            count = size;
            return count;
         }
         --count;
         console.log(count);
      },
      set: function (n) {
         if (n > 0 && n <= size) {
            count = n;
            console.log(count);
         } else {
            console.log('Error!!!')
         }
      },
      reset: function () {
         console.log(count = 0);
      }
   }
}

var slider = initSlider(10);
slider.up();