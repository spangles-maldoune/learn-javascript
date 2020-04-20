let user1 = prompt('Введите ваши данные (возраст, имя и фамилию):', '18 лет Юрий Иванов');
let user2 = prompt('Введите ваши данные (возраст, имя и фамилию):', '16 лет Дмитрий Кузьмин');
let user3 = prompt('Введите ваши данные (возраст, имя и фамилию):', '19 лет Оксана Петрова');
let averageAge = (parseInt (user1) + parseInt (user2) + parseInt (user3)) / 3;

console.log ('**************');
console.log (' ');
console.log ('Список студентов зарегистрировавшихся на вебинар:');
console.log (' ');
console.log ('1. ', user1);
console.log (' ');
console.log ('2. ', user2);
console.log (' ');
console.log ('3. ', user3);
console.log (' ');
console.log ('-------------- Средний возраст студента: ' + (+averageAge.toFixed(2)) + ' --------------');
console.log (' ');
console.log('**************');