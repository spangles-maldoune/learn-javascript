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


var x = 7;
var arr = new Array(x);
var swap;

for (var i = 0; i < arr.length; i++) {
	arr[i] = Math.floor(Math.random() * (10 - 0) + 0);
}

console.log(arr, 'arr');

for (var i = 0; i < arr.length - 1; i += 2) {
	swap = arr[i];
	arr[i] = arr[i + 1];
	arr[i + 1] = swap;
}

console.log(arr, 'arrReverse');