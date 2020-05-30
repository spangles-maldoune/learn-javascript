// Пусть есть объект obj = { anonim: { say: 'Hello anonim' }, user: { say: 'Hello user' }, admin: { say: 'Hello admin' } }, 
// и ф - я: function greeting(who) { }
// при помощи метода call вызвать ф - ю greeting как метод объекта obj без записи в него, 
// с одним из 3ьох значений "anonim, admin, user".Получить в ответ сообщение приветствия.


var obj = {
   anonim: { say: 'Hello anonim' },
   user: { age: 25, say: 'Hello user' },
   admin: { say: 'Hello admin' }
}

function greeting(who) {
   var hiKey = 'say';
   for (var key in this) {
      if (typeof (this[key]) === 'object' && key === who) {
         if (hiKey in this[key]) {
            return this[who][hiKey];
         }
      }
   }
}

console.log(greeting.call(obj, 'user1'));



// Пусть дан следующий код:
// var user = { name: 'Алексей' }
// function func(surname, patronymic) { alert('привет' + ' ' + this.name + ', ' + patronymic + ' ' + surname); }
// func(); //тут должно вывести 'привет, Алексей Алексеевич Петров'
// при помощи apply вывести сообщение 'привет, Алексей Алексеевич Петров' 'Алексеевич', 'Петров' должно быть параметрами ф - ии.


var user = { name: 'Алексей' };
var pref = ['Петров', 'Алексеевич'];

function func(surname, patronymic) {
   alert('привет' + ', ' + this.name + ' ' + patronymic + ' ' + surname);
}

func.apply(user, pref);



// Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на объект user.


// var user = { name: 'Алексей' };

// function func(surname, patronymic) {
//    alert('привет' + ', ' + this.name + ' ' + patronymic + ' ' + surname);
// }

// var func = func.bind(user);
// func('Николаев', 'Иванович');