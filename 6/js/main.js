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



// написать функцию, которая примет как аргумент(параметр) два массива и сравнить суммы всех ЧИСЛОВЫХ элементов.
// Тот массив, сумма которого большая - должен вернутся функцией.

function arrReturn(arrOne, arrTwo) {
   var sumOne = 0;
   var sumTwo = 0;
   var longIndex = Math.max(arrOne.length, arrTwo.length);

   for (var i = 0; i < longIndex; i++) {

      if (typeof (arrOne[i]) === 'number') {
         sumOne += arrOne[i];
      }

      if (typeof (arrTwo[i]) === 'number') {
         sumTwo += arrTwo[i];
      }
   }

   return comparator(sumOne, sumTwo, arrOne, arrTwo);

}

function comparator(sumOne, sumTwo, arrOne, arrTwo) {

   if (sumOne > sumTwo) {
      return arrOne;
   } else {
      return arrTwo;
   }

}

// var mass = [1, 2, 3, true, 'a', 4];
// var mass2 = [2, 3, 2, 'g', true, 5];
// var result = arrReturn(mass, mass2);
// console.log (result);



// Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak.
// В переменной знак может быть: +, -, *, /, %, ^. Вывести результат математического действия, указанного в переменной znak.

// function doMath(x, znak, y) {
//    var mathResult;
//    if (znak === '+') {
//       mathResult = x + y;
//    } else if (znak === '-') {
//       mathResult = x - y;
//    } else if (znak === '*') {
//       mathResult = x * y;
//    } else if (znak === '/') {
//       mathResult = x / y;
//    } else if (znak === '%') {
//       mathResult = x % y;
//    } else if (znak === '^') {
//       mathResult = x ** y;
//    }
//    return mathResult;
// }

// немного оптимизировал функцию, убрав лишние if

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

// var result = doMath(6, '^', 2);
// console.log(result);



// напиши функцию filter, которая принимает функцию - предикат и массив.
// Возвращает она массив значений, для которых предикат вернет true.
// var input = [1, 2, 3, 4, 5, 6];
// function isEven(x) { return x % 2 == 0; } // проверяет на четность
// console.log(filter(input, isEven)); // [2, 4, 6]

// function filter(input, isEven) {
// 	var arr = [];
// 	for (var i = 0; i < input.length; i++) {
// 		if (isEven(input[i])) {
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



// Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом.
// 'func("hello world", ['l', 'd'])' вернет нам "heo wor"

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
// console.log(res);


