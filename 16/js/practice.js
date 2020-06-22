// Создаем 2 блока, с кнопкой Click и счетчиком counter(в виде числа).При нажатии на Click - counter увеличивается.
// При перезагрузке страницы counter должен сохраняться.
// Доп задание 2) Создать кнопку ClearCounters() - очищает все счетчики
// Создать кнопку setCounter(), который запрашивает id(каком блоку изменить счетчик) блока и устанавливает значение(в типе number) в counter.

window.onload = function () {
   var buttons = document.querySelectorAll('.button');
   var counters = document.querySelectorAll('.counter');

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

      counters[i].innerHTML = store.getFromStore('counter' + i) || 0;
      buttons[i].addEventListener('click', click);
   }

}
