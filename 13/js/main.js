//Есть 3 input.Выводить в textarea содержимое всех полей ввода через запятую.Использовать setInterval.



var inputs = document.querySelectorAll('.inputValue');
var textarea = document.querySelector('.textArea');

setInterval(function () {
   var tempCont = [];
   var separator = ', ';

   for (var i = 0; i < inputs.length; i++) {

      if (inputs[i].value) {
         tempCont.push(inputs[i].value);
      }

   }

   textarea.value = tempCont.join(separator);

}, 3000)