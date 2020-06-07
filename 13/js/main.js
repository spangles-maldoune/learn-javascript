//Есть 3 input.Выводить в textarea содержимое всех полей ввода через запятую.Использовать setInterval.


setInterval(function () {
   var inputs = document.querySelectorAll('.inputValue');
   var textarea = document.querySelector('.textArea');
   textarea.textContent = inputs[0].value + ', ' + inputs[1].value + ', ' + inputs[2].value;
}, 3000)