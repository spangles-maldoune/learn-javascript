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
// который состоит из свойство обоих обьектов(склеить). Если свойство повторяется, то взять значение второго обьекта

// assignObjects({ x: 10, y: 20 }, { z: 30 }) -> { x: 10, y: 20, z: 30 }

// assignObjects({ x: 10 }, { x: 20, y: 30 }) - > { x: 20, y: 30 }

// В задачу п.2 из лекции добавить 3ий аргумента flag, который является boolean.
// Если флаг true, тогда при наличии свойства в обоих объектов в результат пойдет значение из первого обьекта, false - из второго.

// assignObjects({ ...}, { ...}, false);


let newObj1 = {
	x: 10,
	c: 15
};

let newObj2 = {
	x: 20,
	y: 30
}

function assignObjects(obj1, obj2, flag) {
	var newobj = {};

	for (var i = 0; i < arguments.length - 1; i++) {
		for (var k in arguments[i]) {
			if (flag === true && newobj[k]) {
				continue;
			} else {
				newobj[k] = arguments[i][k];
			}
		}
	}
	return newobj;
}

var result = assignObjects(newObj1, newObj2, true);
console.log(result);