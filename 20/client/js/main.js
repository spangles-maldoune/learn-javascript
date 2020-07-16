window.onload = function () {

   function sendAjax({ url, method, data, success }) {
      let xhttp = new XMLHttpRequest();

      xhttp.addEventListener('load', function (event) {
         let response = JSON.parse(event.target.response);

         if (typeof (response) !== 'object') {
            success(response);
         } else {
            showUserProducts(response);
         }

      });

      xhttp.open(method, url);
      xhttp.send(JSON.stringify(data));
   }

   const formElements = document.querySelector('form');

   formElements.addEventListener('click', click);

   function click(event) {
      event.preventDefault();
      let target = event.target;

      if (target.tagName == 'BUTTON') {
         let loadFormData = prepareDataToSend(this);

         sendAjax({
            url: 'http://localhost:3005/user-sign',
            method: 'POST',
            data: loadFormData,
            success(data) {
               sendAjax({
                  url: 'http://localhost:3005/user-products',
                  method: 'POST',
                  data: data
               })
            }

         });
      }

   }

   function prepareDataToSend(form) {
      let loadFormData = {};

      [].forEach.call(form, function (item) {
         let isNotButton = item.tagName !== 'BUTTON';

         if (isNotButton) {
            loadFormData[item.name] = item.value;
         };

      });

      return loadFormData;
   }

   function showUserProducts(userProducts) {
   
      let div = document.querySelector('.products-area');
      div.innerHTML = '';
      let ul = document.createElement('ul');
      ul.classList.add('user-products')

      userProducts.forEach(product => {
         let li = liCreator(product.name, product.color);
         ul.append(li);
      });
      
      div.append(ul);
      
   }
   
   function liCreator(name, desc) {
      var li = document.createElement('li');
      li.innerText = name + ' ' + desc;
      return li;
   }
   
}
