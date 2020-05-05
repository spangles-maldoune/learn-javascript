let arr = [1, 2, 11, 5, 6, 7, 13, 6, 18, 24, 20, 1, 13, 21];
console.log(arr, 'arr');
let temp;

for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr.length; j++) {
		if (arr[j] > arr[i]) {
			temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}
}

console.log(arr, 'arr sorted');

let max = arr[arr.length - 1];
let max2 = arr[arr.length - 2];

console.log(max, 'max');
console.log(max2, 'max2');