// Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 обьекта и возвращает новый, 
// который состоит из свойство обоих обьектов(склеить).Если свойство повторяется, то взять значение второго обьекта

// assignObjects({ x: 10, y: 20 }, { z: 30 }) -> { x: 10, y: 20, z: 30 }

// assignObjects({ x: 10 }, { x: 20, y: 30 }) - > { x: 20, y: 30 }

let newobj = {};

let newObj1 = {
	x: 10
};

let newObj2 = {
	x: 20,
	y: 30
}

function assignObjects() {
	var newobj = {};

	for (var i = 0; i < arguments.length; i++) {
		for (var k in arguments[i]) {
			newobj[k] = arguments[i][k];
		}
	}

	return newobj;
}

var result = assignObjects(newObj1, newObj2);
console.log(result);
