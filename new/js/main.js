//Заполнить массив А случайными числами (диазпазон на ваше усмотрение).
//Заменить каждый элемент массива с нечетным индексом на ноль.

// let max = 100, min = 0;
// let size = 10;
// let newArr = [];

// for (let i = 0; i <= size - 1; i++) {
// 	newArr[i] = Math.floor (Math.random() * (max - min) + min);
// 	if (i % 2 != 0) {
// 		newArr[i] = (0);
// 	}
// };

// console.log(newArr);


//Заполнить массив размерностью n значениями с клавиатуры.
//Если введенное значение пользователя не число, или отрицательное значение,
//то запросить повторный ввод данных.

let newArr2;
// let n = 5;

// for (let i = 0; i < n; i++) {
// 	newArr2[] = +prompt ('Введите число:', ' ');
// 	if (+newArr2[] < 0){
// 		+prompt ('Это не число, введите число еще раз:', ' ');
// 	}
// }

let numArray = []
do {
    let num = +prompt('Введите число:', ' ');
    if (!isNaN(num)) {
        numArray.push(num)
    } else {
        continue
    }
    let checkIfContinue = prompt('Продолжить? Y/N', ' ')
    if (checkIfContinue === 'N') {
        break;
    }
} while (true);
console.log(numArray)


