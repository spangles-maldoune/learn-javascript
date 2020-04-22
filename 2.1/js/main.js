let access = prompt ('Кто пришел?', ' ');

if (access == 'Админ') {
	let pass = prompt ('Пароль?', ' ');
	if (pass == 'Черный Властелин') {
		alert ('Добро пожаловать!');
	} else if (pass == null) {
		alert ('Вход отменен');
	} else 
		alert ('Пароль неверен');
} else if (access == null) {
	alert ('Вход отменен');
} else 
	alert ('Я вас не знаю');



// switch (access) {
// 	case 'Админ':
// 		let pass = prompt ('Пароль?', ' ');
// 		switch (pass) {
// 			case 'Черный Властелин':
// 				alert ('Добро пожаловать!');
// 			break;
// 			case null:
// 				alert ('Вход отменен');
// 			break;
// 			default:
// 				alert ('Я вас не знаю');
// 		};
// 	break;
// 	case null:
// 		alert ('Вход отменен');
// 	break;
// 	default:
// 		alert ('Я вас не знаю');
// };