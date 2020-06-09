//Есть 3 input.Выводить в textarea содержимое всех полей ввода через запятую.Использовать setInterval.


setInterval(function () {
   var inputs = document.querySelectorAll('.inputValue');
   var textarea = document.querySelector('.textArea');
   var tempCont = '';
   var separator = ', ';

   var tempArray = []
   for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value !== '') {
         tempArray.push(inputs[i].value)
      }
   }

   if (tempArray.length === 0) {
      return;
   }

   if (tempArray.length > 1) {
      for (var i = 0; i < tempArray.length - 1; i++) {
         tempCont += tempArray[i] + separator;
      }
   }

   tempCont += tempArray[tempArray.length - 1];
   textarea.textContent = tempCont;

}, 3000)