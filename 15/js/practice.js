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
         console.log('actionReset');
      },
      actionHelp: function () {
         console.log('actionHelp');  
      },
      actionPrint: function () {
         console.log('actionPrint');
      },
      actionDevTools: function () {
         console.log('actionDevTools');
      }
   }

   function ContextMenuComponent () {
      
   }

   ContextMenuComponent.prototype.makeContextMenu = function (data, actions) {
      var ul = document.createElement('ul');
      ul.classList.add('right-click-menu');
      for (var i = 0; i < data.items.length; i++) {
         var li = liCreator(data.items[i].title);
         li.addEventListener('click', actions[data.items[i].actionMethod]);
         ul.append(li);
      }
      document.body.append(ul);
      this.contextMenu = ul;
   }

   ContextMenuComponent.prototype.getContextMenu = function () {
      return this.contextMenu;
   }

   function liCreator(title) {
      var li = document.createElement('li');
      li.innerText = title;
      return li;
   }

   ContextMenuComponent.prototype.eventActions = function () {

      document.addEventListener('contextmenu', function rightClick(contextMenu) {
         event.preventDefault();
         contextMenu.style.top = event.clientY + 'px';
         contextMenu.style.left = event.clientX + 'px';
         contextMenu.classList.add('active');
      }.bind(null, contextMenu));

      document.addEventListener('click', function click() {
         contextMenu.classList.remove('active');
      }.bind(null, contextMenu));
      
   }

   var createMenu = new ContextMenuComponent();
   createMenu.makeContextMenu(data, actions);
   var contextMenu = createMenu.getContextMenu();
   createMenu.eventActions();

   
}