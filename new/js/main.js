'use strict'

let max = 100, min = -100;
let newArr = [];
let result = 0;
newArr.length = 10;

for (let i = 0, size = newArr.length - 1; i <= size; i++) {
	newArr[i] = Math.floor (Math.random() * (max - min) + min);
	if (newArr[i] > 0) {
		result += newArr[i];
	}
};

console.log(newArr);

console.log(result);