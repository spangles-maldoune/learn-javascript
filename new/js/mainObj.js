// Написать функцию заполнения массива.Имя произвольное.

function arrMake(min, max, size) {
	var arr = [];
	for (var i = 0; i < size; i++) {
		arr[i] = Math.floor(Math.random() * (max - min) + min);
	}
	return arr;
}

var arr1 = arrMake (0, 10, 10);
var arr2 = arrMake(0, 10, 10);
console.log (arr1);
console.log (arr2);


// написать функцию, которая примет как аргумент(параметр) два массива и сравнить суммы всех ЧИСЛОВЫХ элементов.
// Тот массив, сумма которого большая - должен вернутся функцией.

function arrReturn (arr) {
	var summ = 0;
	for (var i = 0; i < arr.length; i++) {
		summ += arr[i]
	}
	console.log (summ);
}

arrReturn(arr1);



function arrReturn (arr1, arr2) {
	var mass = [arr1, arr2];
	var summ = [0, 0];
	for (var i = 0; i < mass.length; i++) {
		for (var j = 0; j < mass[i].length; j++) {
			if (typeof (mass[i][j]) === 'number') {
				summ[i] = summ[i] + mass[i][j];
			} else {
				continue;
			}

		}

	}
	
	console.log (summ, 'summ');
}

var mass = [1, 2, 3];
var mass2 = [2, 3, 2];
arrReturn(mass, mass2);
