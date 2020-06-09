//Есть 3 input.Выводить в textarea содержимое всех полей ввода через запятую.Использовать setInterval.


setInterval(function () {
   var inputs = document.querySelectorAll('.inputValue');
   var textarea = document.querySelector('.textArea');

   for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value === '') {
         continue;
      } else {
         textarea.textContent += inputs[i].value + ', ';
      }
   }

}, 3000)