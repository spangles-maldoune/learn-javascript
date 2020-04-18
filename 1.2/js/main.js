let user1 = '18 лет Юрий Иванов';
let user2 = '16 лет Дмитрий Кузьмин';
let user3 = '19 лет Оксана Петрова';
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
console.log ('-------------- Средний возраст студента: ' + (+averageAge.toFixed(1)) + ' --------------');
console.log (' ');
console.log('**************');