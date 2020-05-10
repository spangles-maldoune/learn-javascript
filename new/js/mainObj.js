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
