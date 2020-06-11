//Есть 3 input.Выводить в textarea содержимое всех полей ввода через запятую.Использовать setInterval.


setInterval(function () {
   var inputs = document.querySelectorAll('.inputValue');
   var textarea = document.querySelector('.textArea');
   var tempCont = [];
   var separator = ', ';

   for (var i = 0; i < inputs.length; i++) {

      if (inputs[i].value) {
         tempCont.push(inputs[i].value);
      }

   }

   textarea.textContent = tempCont.join(separator);

}, 3000)