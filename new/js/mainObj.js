// Написать функцию заполнения массива.Имя произвольное.

function arrMake(min, max, size) {
    var arr = [];
    for (var i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * (max - min) + min);
    }
    return arr;
}

var arr1 = arrMake(0, 10, 10);
var arr2 = arrMake(0, 10, 10);
console.log(arr1);
console.log(arr2);


// написать функцию, которая примет как аргумент(параметр) два массива и сравнить суммы всех ЧИСЛОВЫХ элементов.
// Тот массив, сумма которого большая - должен вернутся функцией.

function arrReturn(arr) {
    var summ = 0;
    for (var i = 0; i < arr.length; i++) {
        summ += arr[i]
    }
    console.log(summ);
}

arrReturn(arr1);

console.log("Task 1")

function sumTwoArray(arr1, arr2) {
    var longestIndex = Math.max(arr1.length, arr2.length);
    var sumArrayOne = 0;
    var sumArrayTwo = 0;
    for (var i = 0; i < longestIndex; i++) {
        if (Number.isFinite(arr1[i])) {
            sumArrayOne += arr1[i]
        }
        if (Number.isFinite(arr2[i])) {
            sumArrayTwo += arr2[i]
        }
    }
    if (sumArrayOne > sumArrayTwo) {
        return arr1
    } else {
        return arr2
    }
}

var mass = ["test", 2, 3, 4, true];
var mass2 = [2, 3, 2];
sumTwoArray(mass, mass2);

function doMath(x,znak,y) {
    return {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => x / y,
        '%': (x, y) => x % y,
        '^': (x, y) => x ** y,
    }[znak](x, y)
}

var res = doMath(6, '-', 2);
console.log(res);


// напиши функцию filter, которая принимает функцию - предикат и массив.
// Возвращает она массив значений, для которых предикат вернет true.
// var input = [1, 2, 3, 4, 5, 6];
// function isEven(x) { return x % 2 == 0; } // проверяет на четность
// console.log(filter(input, isEven)); // [2, 4, 6]

function filter(input, isEven) {
	var arr = [];
	for (var i = 0; i < input.length; i++) {
		var a = isEven(input[i]);
		if (a === true) {
			arr[arr.length] = input[i];
		} 
	}
	return arr;
}

function isEven(a) {
	return a % 2 == 0;
}

var arrInput = [1, 2, 3, 4, 5, 6];

var arrRes = filter(arrInput, isEven);
console.log(arrRes);





// Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом.
// 'func("hello world", ['l', 'd'])' вернет нам "heo wor"


function sumbolDel(text, contArr) {
	var sumbMass = text.split('');
	var tempMass = [];
	console.log (arguments);
	for (var i = 0; i < sumbMass.length; i++) {
		if (sumbMass[i] !== contArr[0] && sumbMass[i] !== contArr[1]) {
			tempMass.push(sumbMass[i]);
		} 
	} 
	return tempMass.join('');
}

var res = sumbolDel('hello world', ['o', 'h']);
console.log (res);

