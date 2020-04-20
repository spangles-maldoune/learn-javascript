// let num = prompt (' ');
// let result;
// switch (num) { 	 		//название переменной
// 	case '1': 						//первое условие при значении 1
// 		result = ('Зима'); //если все переменные result написать с ключевым словом let, то не работает
// 	break;
// 	case '2':
// 		result = ('Весна');
// 	break;
// 	case '3':
// 		result = ('Лето');
// 	break;
// 	case '4':
// 		result = ('Осень');
// 	break;
// };
// alert (result);


// let day = prompt (' ');
// if (day >= 1 && day <= 10) {
// 	alert ('Перая декада месяца');
// } else if (day >= 11 && day <= 20) {
// 	alert ('Вторая декада месяца');
// } else if (day >= 21 && day <= 31) {
// 	alert ('Третья декада месяца');
// } else if (day > 31) {
// 	alert ('В месяце не может быть больше 31 дня!');
// }


// let str = 'abcde';
// if (str[0] == 'a') {
// 	alert ('Da!');
// } else alert ('Net!');

// let str = '12345';
// if (str[0] == '1' || str[0] == '2' || str[0] == '3') {
// 	alert ('Da!');
// } else alert ('Net!');


// let st3Val = '555';
// let summ = +st3Val[0] + +st3Val[0] + +st3Val[0];
// console.log (summ);

let stVal = '123321';
let stValL = +stVal[0] + +stVal[1] + +stVal[2];
let stValR = +stVal[3] + +stVal[4] + +stVal[5]
if (stValL == stValR) {
	console.log ('Da!!!');
} else console.log ('Net!');

console.log(stValL);
console.log(stValR);

//this is solution if you need to compare more than 6 elements
let stVal = '12344321';
let sum = (input) => input.split('').map(element => +element).reduce((basic, input) => basic + input)
let stValL = sum(stVal.substring(0, stVal.length / 2));
let stValR = sum(stVal.substring(stVal.length / 2, stVal.length));
console.log(`${stValL === stValR ? 'Da!!!' : 'Net!!!'}`)
