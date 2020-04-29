//Заполнить массив А случайными числами (диазпазон на ваше усмотрение). 
//Заменить каждый элемент массива с нечетным индексом на ноль.

let max = 100, min = 0;
let size = 10;
let newArr = [];

for (let i = 0; i <= size - 1; i++) {
	newArr[i] = Math.floor (Math.random() * (max - min) + min);
	if (i % 2 != 0) {
		newArr[i] = 0;
	}
};

console.log(newArr);


//Заполнить массив размерностью n значениями с клавиатуры. 
//Если введенное значение пользователя не число, или отрицательное значение, 
//то запросить повторный ввод данных.

// let newArr = [];
// let num;
// let n = 5;

// for (let i = 0; i < n; i++) {
// 	do {
// 		num = +prompt('Введите число:', ' ');
// 	} while (num < 0 || isNaN (num))
// 	if (num >= 0) {
// 		newArr[i] = num
// 	} else continue;
// }
// console.log(newArr);



// Создать массив А размерностью n.Заполнить случайными числами любом диапазоне.
// Найти максимальное число и минимальное число.
// Элементы массива между min-- max записать в массив B.


/*let arr = [];

// Создаю массив случайных чисел в заданном (size) диапазоне
for (let i = 0, size = 10; i < size; i++) {
	arr[i] = Math.floor (Math.random() * (100 - 0) + 0);
};

console.log(arr, 'array');

//Нахожу минимальное и максимальное значения массива
let max = arr[0];
let min = arr[0];

for (let j = 0;  j < arr.length; j++) {
	if (arr[j] > max) {
		max = arr[j];
	}
	if (min > arr[j]) {
		min = arr[j];
	}
}

console.log(min, 'min');
console.log (max, 'max');

// Записываю все элементы массива между min и max в массив B
let B = [];

for (let k = 0; k < arr.length; k++) {
	if (arr[k] > min && arr[k] < max) {
		B [B.length] = (arr[k]);
	}
};

console.log (B, 'B'); */


// Перевернуть массив, т.е.если был массив 1, 5, 6, 2, 4 -- то мы 
// должны получить 4, 2, 6, 5, 1. Нельзя использовать стандартный метод reverse().
// Постарайтесь не использовать дополнительный массив.


// let nextArr = [1, 5, 6, 2, 4];
// document.write (nextArr + ' ');

// for (let i = nextArr.length - 1; i >= 0; i--) {
// 	document.write (nextArr[i] + ' ');
// }

