// Создаем 2 блока, с кнопкой Click и счетчиком counter(в виде числа).При нажатии на Click - counter увеличивается.
// При перезагрузке страницы counter должен сохраняться.
// Доп задание 2) Создать кнопку ClearCounters() - очищает все счетчики
// Создать кнопку setCounter(), который запрашивает id(каком блоку изменить счетчик) блока и устанавливает значение(в типе number) в counter.

window.onload = function () {
   var buttons = document.querySelectorAll('.button');
   var counters = document.querySelectorAll('.counter');
   var resetButton = document.querySelector('.resetButton');
   var setCounter = document.querySelector('.setCounter');

   var countSize = counters.length - 1;

   var store = {
      setInStore: function (key, value) {
         localStorage.setItem(key, value);
      },
      getFromStore: function (key) {
         return localStorage.getItem(key);
      }
   }

   for (var i = 0; i < buttons.length; i++) {

      var click = (function (counter, value) {
         var counterValue = ++counter.innerHTML;
         store.setInStore('counter' + value, counterValue);
      }).bind(null, counters[i], i);

      var resetCounters = (function (value, counter) {
         store.setInStore('counter' + value, 0);
         counter.innerHTML = store.getFromStore('counter' + value);
      }).bind(null, i, counters[i]);

      counters[i].innerHTML = store.getFromStore('counter' + i) || 0;
      buttons[i].addEventListener('click', click);
      resetButton.addEventListener('click', resetCounters);

   }

   function isNumeric(num) {
      return !isNaN(num);
   }

   function isNumberInRange(min, max, num) {
      return min <= num && num <= max;
   }

   function countSizeValid(number) {
      return isNumberInRange(0, countSize, number);
   }

   function isNull(value) {
      return value === null;
   }

   function validateIdValue(promt) {
      return isNumeric(promt) && countSizeValid(promt) && !isNull(promt);
   }

   function validateCounter(promt) {
      return isNumeric(promt) && !isNull(promt);
   }

   var setCount = function () {
      var idValue = prompt('Введите id счетчика ' + Object.keys(counters), '');

      if (validateIdValue(idValue)) {
         var newCount = prompt('Введите новое значение для счетчика: ', '');
         if (validateCounter(newCount)) {
            store.setInStore('counter' + idValue, newCount);
            return counters[idValue].innerHTML = newCount;
         } else if (isNull(newCount)) {
            return alert('Вы отменили действие!');
         }
      } else if (isNull(idValue)) {
         return alert('Вы отменили действие!');
      }

      alert('Вы ввели некоректное значение!');

   };

   setCounter.addEventListener('click', setCount);

}
