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

function assignObjects(obj1, obj2) {

	for (var i in obj1) {
		newobj[i] = obj1[i];
	}
	for (var y in obj2) {
		newobj[y] = obj2[y]
	}
	return newobj;
}

assignObjects(newObj1, newObj2);
console.log(newobj, 'newobj');