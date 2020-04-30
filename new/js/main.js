// Создать двумерный массив, заполненный случайными числами в любом диапазоне.
// Найти колонку, где сумма элементов наименьшая.
// Найти колонку, где сумма элементов найбольшая.


var arr = [];

for (var i = 0, sizeArr = 5; i < sizeArr; i++) {
	arr[i] = new Array(sizeArr);

	for (var j = 0, len = arr[i].length; j < len; j++) {
		arr[i][j] = Math.floor(Math.random() * (100 - 0) + 0);
	}
}

console.log(arr, 'Array');

for (var i = 0, sizeArr = 5; i < sizeArr; i++) {
	for (var j = 0, len = arr[i].length, arrSum = 0; j < len; j++) {
		arrSum += arr[i][j];
	}
	if (i == 0) {
		var min = arrSum;
		var max = arrSum;
	}
	if (arrSum > max) {
		max = arrSum;
	}
	if (min > arrSum) {
		min = arrSum;
	}
	console.log(arrSum, 'summa');
}

console.log(min, 'min');
console.log(max, 'max');