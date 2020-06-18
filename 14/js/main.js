window.onload = function () {

   var inpRange = document.querySelector('.inpRange');
   var inpNumb = document.querySelector('.inpNumb');
   var blockGreen = document.querySelector('.blockGreen');
   var blockRed = document.querySelector('.blockRed');
   var mainForm = document.querySelector('.mainForm');
   inpNumb.value = inpRange.value;


   function commissionMath(value) {
      var numVal = +value;
      var tempComm;

      if (numVal < 20) {
         tempComm = (numVal / 100) * 2;
      } else if (numVal >= 20 && numVal < 50) {
         tempComm = (numVal / 100) * 4;
      } else if (numVal >= 50 && numVal < 75) {
         tempComm = (numVal / 100) * 6;
      } else if (numVal >= 75 && numVal <= 100) {
         tempComm = (numVal / 100) * 8;
      }
      return tempComm;

   }

   mainForm.onsubmit = function () {
      return false;
   }

   inpRange.oninput = function () {
      inpNumb.value = inpRange.value;
      blockGreen.style.height = inpNumb.value + 'px';
      blockRed.style.bottom = inpNumb.value + 'px';
      var persetn = commissionMath(inpNumb.value);
      blockRed.style.height = persetn + 'px';
   }

   inpNumb.oninput = function () {
      inpRange.value = inpNumb.value;
      blockGreen.style.height = inpNumb.value + 'px';
      blockRed.style.bottom = inpNumb.value + 'px';
      var persetn = commissionMath(inpNumb.value);
      blockRed.style.height = persetn + 'px'; 
   }

}


