// задача называется, найти пропущенный диапазон:
// пример, вот на входи массив и два числа
// Input: nums = [0, 1, 3, 50, 75], lower = 0 and upper = 99,
// 	вот какой должен быть вывод
// Output: ["2", "4->49", "51->74", "76->99"]



let input = [0, 1, 3, 50, 75],
	lower = 0,
	upper = 99,
	output = [];

for (let i = lower; i <= upper; i++) {
	if (input.indexOf(i) < 0) {
		output[output.length] = i;
	}
}

console.log(output);