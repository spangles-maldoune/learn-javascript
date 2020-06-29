
var inpRange = document.querySelector('.inpRange');
var inpNumb = document.querySelector('.inpNumb');
var blockGreen = document.querySelector('.blockGreen');
var blockRed = document.querySelector('.blockRed');
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



window.onload = function () {

   var data = {
      name: 'contextMenu',
      items: [
         {
            title:'перезагрузить',
            actionMethod: 'actionReset'
         },
         {
            title: 'получить помощь',
            actionMethod: 'actionHelp'
         },
         {
            title: 'печать',
            actionMethod: 'actionPrint'
         },
         {
            title: 'типа инспектор кода',
            actionMethod: 'actionDevTools'
         }
      ]
   }

   var actions = {
      actionReset: function () {
         
      },
      actionHelp: function () {
         
      },
      actionPrint: function () {

      },
      actionDevTools: function () {

      }

   }

   function ContextMenuComponent () {
      
   }

   ContextMenuComponent.prototype.makeContextMenu = function () {
      var ul = document.createElement('ul');
      ul.classList.add('right-click-menu');
      for (var i = 0; i < data.items.length; i++) {
         var li = document.createElement('li');
         li.innerText = data.items[i].title;

         ul.append(li);
      }
      document.body.append(ul);
   
   }

   ContextMenuComponent.prototype.rightClickMenu = function () {
     

   }

   var contextMenu = new ContextMenuComponent();
   contextMenu.makeContextMenu();


   var contextMenu = document.querySelector('.right-click-menu');

   document.addEventListener('contextmenu', function rightClick(event) {
      event.preventDefault();
      contextMenu.style.top = event.clientY + 'px';
      contextMenu.style.left = event.clientX + 'px';
      contextMenu.classList.add('active');
   });

   document.addEventListener('click', function click(event) {
      contextMenu.classList.remove('active');
      
   });

   contextMenu.addEventListener('click', function (event) {
      event.stopPropagation();
   });

   
}




