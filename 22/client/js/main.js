window.onload = function () {

   const countriesSelect = document.querySelector('.countries');
   const citiesSelect = document.querySelector('.cities');
   const streetsSelect = document.querySelector('.street');

   countriesSelect.addEventListener('change', function () {
      citiesSelect.classList.add('active');
      citiesSelecter(citiesSelect, countriesSelect);
   });

   citiesSelect.addEventListener('change', function () {
      streetsSelect.classList.add('active');
      streetSelecter(streetsSelect, citiesSelect, countriesSelect);
   });

   function renderResult() {
      let span = document.createElement('span');
      span.classList.add('item-span');
      
      streetsSelect.addEventListener('change', function () {
         span.innerText = ''; 
         printResult(span);
      })
      document.body.append(span);
   }

   function printResult(span) {
      span.innerText = 'Итого: страна ' + countriesSelect.value + ', город: ' + citiesSelect.value + ', улица: ' + streetsSelect.value;
   }
   
   async function countriesSelecter() {
      const objCountries = await fetch('http://localhost:3010/countries');
      const respCountries = await objCountries.json();
      respCountries.forEach(item => countriesSelect.add(new Option(item)));
   }

   async function citiesSelecter() {
      const objCities = await fetch(`http://localhost:3010/cities?activeCountry=${countriesSelect.value}`);
      const respCities = await objCities.json();
      citiesSelect.length = 0;
      respCities.forEach(item => citiesSelect.add(new Option(item)));
      streetSelecter();
   }

   async function streetSelecter() {
      const objCities = await fetch(`http://localhost:3010/streets?activeCountry=${countriesSelect.value}&activeCity=${citiesSelect.value}`);
      const respStreet = await objCities.json();
      streetsSelect.length = 0;
      respStreet.forEach(item => streetsSelect.add(new Option(item)));
   }
   
   countriesSelecter();
   renderResult();

}
