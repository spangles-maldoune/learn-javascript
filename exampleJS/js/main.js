
// let num = prompt (' ');
// let result;
// switch (num) { 	 		//название переменной
// 	case '1': 						//первое условие при значении 1
// 		result = ('Зима'); //если все переменные result написать с ключевым словом let, то не работает
// 	break;
// 	case '2':
// 		result = ('Весна'); 
// 	break;
// 	case '3':
// 		result = ('Лето');
// 	break;
// 	case '4':
// 		result = ('Осень');
// 	break;
// };
// alert (result);


// let day = prompt (' ');
// if (day >= 1 && day <= 10) {
// 	alert ('Перая декада месяца');
// } else if (day >= 11 && day <= 20) {
// 	alert ('Вторая декада месяца');
// } else if (day >= 21 && day <= 31) {
// 	alert ('Третья декада месяца');
// } else if (day > 31) {
// 	alert ('В месяце не может быть больше 31 дня!');
// }


// let str = 'abcde';
// if (str[0] == 'a') {
// 	alert ('Da!'); 
// } else alert ('Net!');

// let str = '12345';
// if (str[0] == '1' || str[0] == '2' || str[0] == '3') {
// 	alert ('Da!'); 
// } else alert ('Net!');


// let st3Val = '555';
// let summ = +st3Val[0] + +st3Val[0] + +st3Val[0];
// console.log (summ);

// let stVal = '123321';
// let stValL = +stVal[0] + +stVal[1] + +stVal[2];
// let stValR = +stVal[3] + +stVal[4] + +stVal[5]
// if (stValL == stValR) {
// 	console.log ('Da!!!');
// } else console.log ('Net!');

// console.log(stValL);
// console.log(stValR);

// let stVal = prompt( ' ','12344321');
// let sum = (input) => input.split('').map(element => +element).reduce((basic, input) => basic + input)
// let stValL = sum(stVal.substring(0, stVal.length / 2));
// let stValR = sum(stVal.substring(stVal.length / 2, stVal.length));
// console.log(`${stValL === stValR ? 'Da!!!' : 'Net!!!'}`)


// let access = prompt ('Кто пришел?', ' ');


// let result = (access == 'Админ') ? prompt ('Пароль?', ' ') : alert ('Я вас не знаю');
// 	(access === null) ? alert ('Вход отменен') :
// 	(access !== 'Админ') ? 

// (access === 'Админ') ?
// 	pass = prompt ('Пароль?', ' ') : alert ('Я вас не знаю');
// (pass ==='Черный Властелин') ?
// 	alert ('Добро пожаловать!') : alert ('Пароль неверен');
// (access, pass === null) ?
// 	alert ('Вход отменен') : alert ('Вход отменен');


// if (access == 'Админ') {
// 	let pass = prompt ('Пароль?', ' ');
// 	if (pass == 'Черный Властелин') {
// 		alert ('Добро пожаловать!');
// 	} else if (pass == null) {
// 		alert ('Вход отменен');
// 	} else 
// 		alert ('Пароль неверен');
// } else if (access == null) {
// 	alert ('Вход отменен');
// } else 
// 	alert ('Я вас не знаю');

// switch (access) {
// 	case 'Админ':
// 		let pass = prompt ('Пароль?', ' ');
// 		switch (pass) {
// 			case 'Черный Властелин':
// 				alert ('Добро пожаловать!');
// 			break;
// 			case null:
// 				alert ('Вход отменен');
// 			break;
// 			default:
// 				alert ('Я вас не знаю');
// 		};
// 	break;
// 	case null:
// 		alert ('Вход отменен');
// 	break;
// 	default:
// 		alert ('Я вас не знаю');
// };

// let obj = {
// 	Коля: 200,
// 	Вася: 400,
// 	Петя: 500,
// 	Рома: 100
// };
// for (ki in obj) {
// 	console.log (obj[ki]);
// }

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] === 3) {
// 		break;
// 	} else {
// 		alert (arr[i]);
// 	}
// }


// let i = 1;

// while (i <= 100) {
// 	console.log(i, 'i');
// 	i++
// }


// let a = 11;

// while (a <= 33) {
// 	console.log(a, 'a');
// 	a++
// }

// let b = 0;

// while (b <= 100) {
// 	if (b % 2 == 0) {
// 		console.log(b, 'b');
// 	}
// 	b++
// }

// let sum = 0;
// let i = 1;

// while (i <= 100) {
// 	sum = sum + i;
// 	i++
// }
// console.log (sum);

// let arr = [1, 2, 3, 4, 5]
// let result = 0;

// for (let i = 0; i < arr.length; i++) {
// 	result += arr[i];
// }
// console.log (result);

// let objec = {green: 'зеленый', red: 'красный', blue: 'голубой'};

// for (let brr in objec) {
// 	console.log(brr, objec[brr]);
// }

// let obj = {
// 	Коля: '200',
// 	Вася: '300',
// 	Петя: '400'
// }

// for (let key in obj) {
// 	console.log (key + ' - зарплата ' + obj[key] + ' долларов');
// }

// let array = [2, 5, 9, 15, 0, 4];

// for ( let i = 0; i < array.length; i++) {
// 	if (array[i] > 3 && array[i] < 10) {
// 		console.log (array[i]);
// 	}
// }


/* Дан массив с числами. 
Числа могут быть положительными и отрицательными. 
Найдите сумму положительных элементов массива. */

// let max = 100, min = -100;
// let newArr = [];
// let result = 0;
// let size = 10;
// for (let i = 0; i <= size; i++) {
// 	newArr[i] = Math.floor (Math.random() * (max - min) + min);
// };


// for (let i = 0; i <= size; i++) {
// 	if (newArr[i] > 0) {
// 		result += newArr[i];
// 	}
// }
// console.log(newArr);
// console.log(result);





// var max = 10, min = 5;
// var arr = [];
// arr.length = 2;
// console.log(arr, 'arr');

// for(var i = 0, size = arr.length; i <= size; i++) {
//   console.log(i, arr.length, 'i, arr.length');
//   arr[i] = Math.floor(Math.random() * (max - min) + min);
// }

// console.log(arr, 'arr');


//let numArray = []
// do {
//     let num = +prompt('Введите число:', ' ');
//     if (!isNaN(num)) {
//         numArray.push(num)
//     } else {
//         continue
//     }
//     let checkIfContinue = prompt('Продолжить? Y/N', ' ')
//     if (checkIfContinue === 'N') {
//         break;
//     }
// } while (true);
// console.log(numArray)


// let str = '123456789';
// console.log(str);
// let arr = str.split('');
// console.log(arr);
// let arr1 = arr.reverse();
// console.log(arr1);
// let res = arr1.join('')
// console.log(res);

// let res1 = str.split('').reverse().join('');
// console.log (res1)

// arr = [1, 2, 3, 4, 5, 6];

// console.log (arr.lastIndexOf(1), 'lastIndexOf');
// arr.forEach ((item, index, arryy) => {
// 	console.log (`${item} has position ${index} in ${arryy}`);
// });

// console.log (arr.concat(arr[1], arr[0]));

// let a = arr[arr.length - 1];  //перестановка первого и последнего элемента массива местами
// arr[arr.length - 1] = arr[0];
// arr[0] = a;
// console.log(arr);
// let rem = arr.splice (1, 1, 'hi');
// console.log (arr);

// let cut = arr.slice(0, 3);
// console.log(cut);



// Создать двумерный массив, заполненный случайными числами в любом диапазоне.
// Найти колонку, где сумма элементов наименьшая.
// Найти колонку, где сумма элементов найбольшая.


// var arr = [];

// for (var i = 0, sizeArr = 5; i < sizeArr; i++) {
// 	arr[i] = new Array(sizeArr);

// 	for (var j = 0, len = arr[i].length; j < len; j++) {
// 		arr[i][j] = Math.floor(Math.random() * (100 - 0) + 0);
// 	}
// }

// console.log(arr, 'Array');

// for (var i = 0, sizeArr = 5; i < sizeArr; i++) {
// 	for (var j = 0, len = arr[i].length, arrSum = 0; j < len; j++) {
// 		arrSum += arr[j][i];
// 	}
// 	if (i == 0) {
// 		var min = arrSum;
// 		var max = arrSum;
// 	}
// 	if (arrSum > max) {
// 		max = arrSum;
// 	}
// 	if (min > arrSum) {
// 		min = arrSum;
// 	}
// 	console.log(arrSum, 'summa');
// }

// console.log(min, 'min');
// console.log(max, 'max');



// В одномерном массиве произвести такую замену:
// 1 элемент поменять с 2
// 3 элемент поменять с 4
// 5 элемент поменять с 6 и тд
// Если массив непарный - последний элемент не трогать.

// 	было 1 2 3 4 5 6, должно стать: 2 1 4 3 6 5


// var x = 6;
// var arr = new Array (x);
// var temp;

// for (var i = 0; i < arr.length; i++) {
// 	arr[i] = Math.floor(Math.random() * (10 - 0) + 0);
// }

// console.log(arr, 'arr');

// for (var i = 0; i < arr.length; i++) {
// 	if (i == 0 || i % 2 == 0) {
// 		temp = arr[i];
// 	} else {
// 		arr[i - 1] = arr[i];
// 		arr[i] = temp;
// 	}
// }

// console.log (arr, 'arrReverse');



// var x = 7;
// var arr = new Array(x);
// var swap;
// var i = 0;

// for (var i = 0; i < arr.length; i++) {
// 	arr[i] = Math.floor(Math.random() * (10 - 0) + 0);
// }

// console.log(arr, 'arr');

// for (var i = 0; i < arr.length - 1; i += 2) {
// 	swap = arr[i];
// 	arr[i] = arr[i + 1];
// 	arr[i + 1] = swap;
// }

// console.log(arr, 'arrReverse');




// let a = mass.slice(0, 2).reverse();
// let b = mass.slice(2, 4).reverse();
// let c = mass.slice(4, 6).reverse();
// let newMass = arr.concat(a, b, c);

// console.log(mass);
// console.log(newMass);


// Дано число n = 1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. 
// Какое число получится ? Посчитайте количество итераций, необходимых для этого(итерация - это проход цикла),
// и запишите его в переменную num.


// let n = 1000;
// let num = 0;

// while (n > 50) {
// 	n = n / 2;
// 	num ++;
// }

// console.log (n, 'n');
// console.log(num, 'num');


// var str = '2025-12-31';
// var arr = str.split('-');
// var newStr = arr.join ('/');
// console.log(arr, 'arr');
// console.log(newStr, 'newStr');



// var x = 7;
// var arr = new Array(x);
// var i = 0;
// var swap;
// var j = 0;

// while (i < arr.length) {
// 	arr[i] = Math.floor(Math.random() * (10 - 0) + 0);
// 	i++;
// }
// console.log (arr, 'before');

// while (j < arr.length - 1) {
// 	swap = arr[j];
// 	arr[j] = arr[j + 1];
// 	arr[j + 1] = swap;
// 	j += 2;
// }

// console.log(arr, 'after');


// Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. 
// С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. 
// Если есть - выведите на экран 'Есть!' и выйдите из цикла.Если нет - ничего делать не надо.


// let arr = [1, 4, 5, 9, 7, 13, 5, 10];

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] === 4) {
// 		console.log ('Есть!');
// 		break;
// 	}
// }


// Дан массив с числами, например: [10, 20, 30, 50, 235, 3000].
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

// let arr = [10, 20, 30, 50, 235, 3000];

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] == 1 || arr[i] == 2 || arr[i] == 5) {
// 		console.log(arr[i]);
// 	}
// }

// var numbers = [10, 20, 30, 50, 235, 3000, 65, 42, 298];
// var c = numbers.length;
// for (var i = 0; i < c; i++){
// 	var str = numbers[i] + '';
	
// 	if(str[0] === '1'|| str[0] === '2'|| str[0] === '5'){
// 		console.log(str)
// 	}
// }


// var week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// var b = week.length;
// var day = 6;
// for(var i = 0; i < b; i++){
// 	if(i == day){
// 		document.write('<em>'+ week[i] + '</em>' + ' ' );
// 	}
// 	else{
// 		document.write(week[i]+' ');
// 	}
// }


// Дополнительное домашнее задание!!!!!


// Посчитать факториал !n, где n - ввести с клавиатуры.

// let n = +prompt ('Введите число:', ' ');
// let result = 1;

// for (let i = 1; i <= n; i++) {
// 	result *= i;	
// }
// alert('Факториал числа ' + n + ' равен: ' + result);

// то же самое, только в обратную сторону
// let n = 6;
// let result = 1;

// for (let i = n; i >= 1; i--) {
// 	result *= i;
// }
// console.log (result);


// Написать скрипт возведения числа А в степень В

// let A = +prompt ('Введите число:', ' ');
// let B = +prompt('В какую степень возвести?', ' ');;
// let res = 1;
// let C = A ** B;
// console.log (C);
// for (let i = 1; i <= B; i++) {
// 	res *= A;
// }

// alert(A + ' в степени ' + B + ' = ' + res);

//Реализовать скрипт, который получает номер n, и возвращает число Фибоначчи по этому номеру.

// let F1 = 1;
// let F2 = 1;
// let n = +prompt ('Введите число:', ' ');
// let res;
// for (let i = 2; i < n; i++) {
// 	if (n >= 0) {
// 		res = F1 + F2;
// 		F1 = F2;
// 		F2 = res;
// 	} else if (n < 0) {
// 		res = F2 - F1;
// 		F2 = F1;
// 		F1 = res;
// 	}
	
// }
// console.log(res);


// if (n >= 0) {
// 	for (let i = 2; i < n; i++) {
// 		res = F1 + F2;
// 		F1 = F2;
// 		F2 = res;
// 	}
// } else if (n < 0) {
// 	for (let i = n; i < 0; i++) {
// 		res = F2 - F1;
// 		F2 = F1;
// 		F1 = res;
// 	}

// }

	 
	
// console.log(res);



// задача называется, найти пропущенный диапазон:
// пример, вот на входи массив и два числа
// Input: nums = [0, 1, 3, 50, 75], lower = 0 and upper = 99,
// 	вот какой должен быть вывод
// Output: ["2", "4->49", "51->74", "76->99"]



// let input = [0, 1, 3, 50, 75],
// 	lower = 0,
// 	upper = 99,
// 	output = [];

// for (let i = lower; i <= upper; i++) {
// 	if (input.indexOf(i) < 0) {
// 		output[output.length] = i;
// 	}
// }

// console.log (output);




// найти второй по велечене максимум в массиве
// [1, 2, 11, 5, 6, 7, 13]
// вывести 11


// let arr = [1, 2, 11, 5, 6, 7, 13];
// console.log (arr, 'arr');
// let temp;

// for (let i = 0; i < arr.length; i++) {
// 	for (let j = 0; j < arr.length; j++) {
// 		if (arr[j] > arr[i]) {
// 			temp = arr[i];
// 			arr[i] = arr[j];
// 			arr[j] = temp;
// 		}
// 	}
// }

// console.log (arr, 'arr sorted');

// let max = arr[arr.length - 1];
// let max2 = arr[arr.length - 2];

// console.log(max, 'max');
// console.log(max2, 'max2');




// дан отсортированный массив, вернуть массив с этими числами возведенными в квадрат и также отсортированный
// Например, дан такой массив
// [-4, -1, 0, 3, 10]
// Результат
// [0, 1, 9, 16, 100]


// let arr = [-4, -1, 0, 3, 10];
// let temp;
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
// 	arr[i] *= arr[i];
	
// }
// for (let i = 0; i < arr.length; i++) {
// 	for (let j = 0; j < arr.length; j++) {
// 		if (arr[j] > arr[i]) {
// 			temp = arr[i];
// 			arr[i] = arr[j];
// 			arr[j] = temp;
// 		}
// 	}
// }

// console.log (arr);



// let arr = [-4, -1, 0, 3, 10];
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
// 	arr[i] *= arr[i];
// }
// let c = [];
// for (; arr.length;) {
// 	c.push(arr.splice(arr.indexOf(Math.min(...arr)), 1)[0]) 
// }
// console.log(c)




// Создать массив А размерностью n.Заполнить случайными числами любом диапазоне.
// Найти максимальное число и минимальное число.
// Элементы массива между min-- max записать в массив B.


// let arr = [];

// // Создаю массив случайных чисел в заданном (size) диапазоне
// for (let i = 0, size = 10; i < size; i++) {
// 	arr[i] = Math.floor (Math.random() * (100 - 0) + 0);
// };

// console.log(arr, 'array');

// //Нахожу минимальное и максимальное значения массива
// let min = arr[0];
// let max = arr[0];
// let minInd = 0;
// let maxInd = 0;

// for (let j = 0;  j < arr.length; j++) {
// 	if (arr[j] > max) {
// 		max = arr[j];
// 		maxInd = j;
// 	}
// 	if (min > arr[j]) {
// 		min = arr[j];
// 		minInd = j;
// 	}
// }

// console.log(maxInd, minInd, 'maxInd origin, minInd origin');

// // меняю местами значения
// let temp;

// if (minInd > maxInd) {
// 	arr[minInd] = max;
// 	arr[maxInd] = min;
// 	temp = minInd;
// 	minInd = maxInd;
// 	maxInd = temp;
// }

// console.log (arr, 'arr, after rotate');
// console.log(maxInd, minInd, 'maxInd, minInd,');
// console.log(max, min, 'max, min');

// // Записываю все элементы массива между min и max в массив B
// let B = [];

// for (let k = minInd + 1; k < maxInd; k++) {
// 	B[B.length] = arr[k];
// };

// console.log (B, 'B');




//Перевернуть массив, т.е.если был массив 1, 5, 6, 2, 4 -- то мы
// должны получить 4, 2, 6, 5, 1. Нельзя использовать стандартный метод reverse().
// Постарайтесь не использовать дополнительный массив.


// let nextArr = [1, 5, 6, 2, 4];
// console.log(nextArr, 'before');
// let temp;

// for (let i = 0, j = nextArr.length - 1; i < j; i++, j--) {
// 	temp = nextArr[i];
// 	nextArr[i] = nextArr[j];
// 	nextArr[j] = temp;
// }

// console.log (nextArr, 'after');


// function arrayFiller(size) {
// 	var arr = [];

// 	for (var i = 0; i < size; i++) {
// 		arr[i] = Math.floor(Math.random() * 10) ;
// 	}

// 	 return arr;
// 	// console.log (arr);
// }

// var arr = arrayFiller(10);
// console.log (arr);


// function getPerson(name, age) {
// 	var person = {
// 		name: name,
// 		age: age
// 	};

// 	return person;
// }

// var persons = new Array(5);

// for (var i = 0, size = persons.length; i < size; i++) {
// 	var person = getPerson('abc'+ i, i);
// 	persons[i] = person;
// }

// console.log (persons);


// Сделайте функцию inArray('hello', ['svnj', 'hello', 'cvpoq']), которая определяет, есть в массиве элемент с заданным текстом или нет.
// Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск.
// Функция должна возвращать true или false.


// function inArray (text, array) {
	
// 	for (let i = 0; i < array.length; i++) {

// 		if (array[i] === text) {
// 			return true;
// 		} 
// 	}
// 	return false;
// }

// let arr = ['svnj', 'hello', 'cvpoq'];

// console.log(inArray('hello', arr));



// Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 обьекта и возвращает новый, 
// который состоит из свойство обоих обьектов(склеить).Если свойство повторяется, то взять значение второго обьекта





// let newObj1 = {
// 	x: 10,
// 	c: 15
// };

// let newObj2 = {
// 	x: 20,
// 	y: 30
// }


// function assignObjects(obj1, obj2, flag) {
// 	var newobj = {};

// 	for (var i = 0; i < arguments.length - 1; i++) {

// 		for (var k in arguments[i]) {
// 			if (flag === true && newobj[k]) {
// 				continue;
// 			} else {
// 				newobj[k] = arguments[i][k];
// 			}
// 		}
// 	}
// 	return newobj;
// }


// function assignObjects(obj1, obj2, flag) {
// 	let newobj = {};

// 	for (var i in obj1) {
// 		newobj[i] = obj1[i];
// 	}

// 	for (var y in obj2) {
// 		if (flag === true && newobj[y]) {
// 			continue;
// 		} else {
// 			newobj[y] = obj2[y];
// 		}
// 	}
	
// 	return newobj;
// }


// var result = assignObjects(newObj1, newObj2, true);
// console.log(result);

// var newObject = assignObjects(newObj1, newObj2, newObj3);
// console.log (newObject);
// console.log(assignObjects(newObj1, newObj2, newObj3));




// Написать функцию заполнения массива. Имя произвольное.

// function arrMake(min, max, size) {
// 	var arr = [];
// 	for (var i = 0; i < size; i++) {
// 		arr[i] = Math.floor(Math.random() * (max - min) + min);
// 	}
// 	return arr;
// }

// var arr1 = arrMake (0, 10, 10);
// var arr2 = arrMake(0, 10, 10);
// console.log (arr1);
// console.log (arr2);


// // написать функцию, которая примет как аргумент(параметр) два массива и сравнить суммы всех ЧИСЛОВЫХ элементов.
// // Тот массив, сумма которого большая - должен вернутся функцией.



// function arrReturn(arrOne, arrTwo) {
// 	var sumOne = 0;
// 	var sumTwo = 0;
// 	var longIndex = Math.max(arrOne.length, arrTwo.length);

// 	for (var i = 0; i < longIndex; i++) {

// 		if (typeof (arrOne[i]) === 'number') {
// 			sumOne += arrOne[i];
// 		}

// 		if (typeof (arrTwo[i]) === 'number') {
// 			sumTwo += arrTwo[i];
// 		}
// 	}

// 	if (sumOne > sumTwo) {
// 		return arrOne;
// 	} else {
// 		return arrTwo;
// 	}
// }

// var mass = [1, 2, 3, true, 'a', 4];
// var mass2 = [2, 3, 2, 'g', true, 5];
// var result = arrReturn(mass, mass2);
// console.log (result);

// ========================= решение Ромы =========================

// function arrReturn(arr) {
// 	var summ = 0;
// 	for (var i = 0; i < arr.length; i++) {
// 		summ += arr[i]
// 	}
// 	console.log(summ);
// }

// arrReturn(mass);

// console.log("Task 1")

// function sumTwoArray(arr1, arr2) {
// 	var longestIndex = arr1.length;
// 	if (longestIndex < arr2.length) {
// 		longestIndex = arr2.length;
// 	}
// 	var sumArrayOne = 0;
// 	var sumArrayTwo = 0;
	
// 	for (var i = 0; i < longestIndex; i++) {
// 		if (+arr1[i]) {
// 			sumArrayOne += arr1[i]
// 		}
// 		if (+arr2[i]) {
// 			sumArrayTwo += arr2[i]
// 		}
// 	}
// 	if (sumArrayOne > sumArrayTwo) {
// 		return arr1
// 	} else {
// 		return arr2
// 	}
	

// }

// var mass = [true, 2, 3];
// var mass2 = [1, 3, true];
// sumTwoArray(mass, mass2);
// console.log(sumTwoArray(mass, mass2));



// Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak.
// В переменной знак может быть: +, -, *, /, %, ^. Вывести результат математического действия, указанного в переменной znak.

// function doMath (x, znak, y) {
// 	var mathResult;
// 	if (znak === '+') {
// 		mathResult = x + y;
// 	}
// 	if (znak === '-') {
// 		mathResult = x - y;
// 	}
// 	if (znak === '*') {
// 		mathResult = x * y;
// 	}
// 	if (znak === '/') {
// 		mathResult = x / y;
// 	}
// 	if (znak === '%') {
// 		mathResult = x % y;
// 	}
// 	if (znak === '^') {
// 		mathResult = x ** y;
// 	}
// 	return mathResult;
// }


// function doMath(x, znak, y) {
// 	var valueMass = {
// 		'+': x + y,
// 		'-': x - y,
// 		'*': x * y,
// 		'/': x / y,
// 		'%': x % y,
// 		'^': x ** y
// 	};
// 	for (key in valueMass) {
// 		if (znak === key) {
// 			return (valueMass[key]);
// 		}
// 	}
// }

// var result = doMath (6, '^', 2);
// console.log (result);



// напиши функцию filter, которая принимает функцию - предикат и массив.
// Возвращает она массив значений, для которых предикат вернет true.
// var input = [1, 2, 3, 4, 5, 6];
// function isEven(x) { return x % 2 == 0; } // проверяет на четность
// console.log(filter(input, isEven)); // [2, 4, 6]


// function filter(input, isEven) {
// 	var arr = [];
// 	for (var i = 0; i < input.length; i++) {
// 		if (isEven(input[i]) === true) {
// 			arr[arr.length] = input[i];
// 		} 
// 	}
// 	return arr;
// }

// function isEven(a) {
// 	return a % 2 == 0;
// }

// var arrInput = [1, 2, 3, 4, 5, 6];

// var arrRes = filter(arrInput, isEven);
// console.log(arrRes);


// // Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом.
// // 'func("hello world", ['l', 'd'])' вернет нам "heo wor"


// function sumbolDel(text, contArr) {
// 	var sumbMass = text.split('');
// 	var tempMass = [];
// 	for (var i = 0; i < sumbMass.length; i++) {
// 		if (contArr.indexOf(sumbMass[i]) === -1) {
// 			tempMass.push(sumbMass[i]);
// 		} 
// 	} 
// 	return tempMass.join('');
// }


// var res = sumbolDel('hello world', ['l', 'd',]);
// console.log (res);




// Написать функцию initSlider(size), которая вернет функционал предоставляющий возможность увеличевать или уменьшать счетчик.
// Передусмотреть валидацию: если счетчик стал равен size, то сбросить его на 0. Если счетчик равен 0, то установить его на size.
// Предусмотреть возможность сброса счетчика на 0.
// Предусмотреть возможность установки произвольного значения "n" счетчика, где n > 0, и n <= size,
// в случае установки значения n которое не прошло валидацию выдать в консоль ошибку.


function initSlider(size) {
   var count = 0;
   return {
      up: function () {
         if (count === size) {
            return console.log(count = 0);
         }
         console.log(++count);
      },
      down: function () {
         if (count === 0) {
            return console.log (count = size);
         }
         console.log(--count);
      },
      set: function (n) {
         if (n > 0 && n <= size) {
            console.log (count = n);
         } else {
            console.log ('Error!!!')
         }
      },
      reset: function () {
         console.log (count = 0);
      }
   }
}

var slider = initSlider(10);
slider.up();



