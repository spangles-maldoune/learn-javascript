let arr = [-4, -1, 0, 3, 10];
console.log(arr);
let temp;

for (let i = 0; i < arr.length; i++) {
	arr[i] *= arr[i];
}

for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr.length; j++) {
		if (arr[j] > arr[i]) {
			temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}
}

console.log(arr);