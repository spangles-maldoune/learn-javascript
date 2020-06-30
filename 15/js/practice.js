// Реализовать контекстное меню.Список хранить в памяти.При клике правой кнопкой мышии:
// появляется контекстное меню в месте нажатяи кнопкой мыши(дизайн и принцип работы сделать точно такой же как работает в браузере)
// список контекстного меню на ваше усмотрение
// меню пропадает при нажатии в любом месте окна за границами контекстного меню
// Хранить в списке action - название функции которая будет выполнятся при нажатии на пункт меню из задания №1(принцип работы как делали на практике)


window.onload = function () {

   var data = {
      name: 'contextMenu',
      items: [
         {
            title: 'перезагрузить',
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

   function ContextMenuComponent() {

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
      return this._contextMenu = ul;
   }

   function liCreator(title) {
      var li = document.createElement('li');
      li.innerText = title;
      return li;
   }

   ContextMenuComponent.prototype.addEventListeners = function () {

      document.addEventListener('contextmenu', function rightClick(contextMenu, event) {
         event.preventDefault();
         contextMenu.style.top = event.clientY + 'px';
         contextMenu.style.left = event.clientX + 'px';
         contextMenu.classList.add('active');
      }.bind(null, this._contextMenu));

      document.addEventListener('click', function click(contextMenu) {
         contextMenu.classList.remove('active');
      }.bind(null, this._contextMenu));

   }

   var createMenu = new ContextMenuComponent();
   createMenu.makeContextMenu(data, actions);
   createMenu.addEventListeners();

}