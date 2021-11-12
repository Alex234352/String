
/* Cтроки //
/* метод строк //

/ charAt

let input = 'alexas.foje@gmail.com';
for (let i =0; i<input.length; i++) {
	if (input.charAt(i) === '@'){                                 //charAt(i) = ищет кусок строки 
		console.log ('There\'s an @ sign at index' + i);  //
	}
}


/ indexOf -находит выбранный эпизод и возвращает его местонахождение - начало


let phrase = 'the cat in the hat';
index = phrase.indexOf("the " , 5);
console.log ('there\'s a the sitting at index ' + index);

/ substring  - вырезает элемент от начальной заданной  до конечной заданной точки. 

let data = 'name|phone|adress' ;
let val = data.substring(5,10);
console.log('Substring is ' + val);

*/

//Сделать первый символ заглавным//

// function ucFirst (name) {
// 	return name[0].toUpperCase() + name.slice(1) ;
	
// }

// ucFirst('Vasya')

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.



function checkSpam (str) {
	let lowerString = str.toLowerCase();
	if (!str) {	return str;}
		else if ( lowerString.includes('viagra')  ||  lowerString.includes('XXX') ) {
		return true;
	}
   return false;
}

alert (checkSpam ('buy ViAgRA now'));


//Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

//dРезультатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

function truncate (str,maxlength) {
	if ( str.length > maxlength) {
	return str.slice(0, maxlength - 1 ) + '...' ;
	} 
	else {
	  return str + "*".repeat(maxlength - str.length);
	}
 }
 
 }
 
 console.log(truncate("12345678901", 20))


 //В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.

 let date = '2025-12-31';
 let date2= date.split('-')
 /* let date3 = date2.reverse(); */
 let date3 = [date2[2], date2[1], date2[0]]
 
 console.log(date3.join('.'));
 






function max(Arr){
 let max = arr[0];
 for(var i=1; i<arr.length; i++){
   if(arr[i] > max){
     max = arr[i];   
   }
  }
return max;
}

/*
Запись строк. Кавычки.
Строку можно создать с помощью одинарных,
двойных либо обратных кавычек:
*/
/*
let someStringOne = 'Привет! Я строка!'; // Одинарные
let someStringTwo = "Привет! Я строка!"; // Двойные
let someStringThree = `Привет! Я строка!`; // Обратные

console.log(someStringOne);
console.log(someStringTwo);
console.log(someStringThree);
*/

/*
Одинарные и двойные кавычки работают, по сути, одинаково,
а если использовать обратные кавычки, то в такую строку
мы сможем вставлять произвольные выражения, обернув их в ${…}:
*/
/*
let textHi = "Привет!";
let textAll = `${textHi} Я строка!`;

console.log(textAll);

function someSum(a, b) {
	return a + b;
}
console.log(`Сумма: ${someSum(4, 7)}`);


// Многострочная запись

let text = `Привет!
Вы на канале
Фрилансер по жизни!
`;
console.log(text);

*/


/*
Все что заключено в любые кавычки будет
иметь тип данных строка
*/
/*
let someString = "158";
let someNum = 158;
console.log(someString);
console.log(typeof someString);
console.log(someNum);
console.log(typeof someNum);

console.log(someString + someNum);
*/

//=============================================================================


//Спецсимволы

/*
Внутри строк можно использовать ряд спецсимволов.
Все спецсимволы начинаются с обратного слеша,
\ — так называемого «символа экранирования».
Вот несколько ихз них:
*/

/*
// Перевод строки \n

let textOne = `Привет!
Вы на канале
Фрилансер по жизни!
`;
console.log(textOne);

let textTwo = "Привет!\nВы на канале\nФрилансер по жизни!";
console.log(textTwo);
*/

//============

/*
// Табуляция (отступ) \t

let text = "Привет!\n\tВы на канале\n\t\tФрилансер по жизни!";
console.log(text);
*/

//============

/*
// Обратный слеш \\

let text = "Привет! Вы на канале Фрилансер по жизни \\ IT и фриланс";
console.log(text);
*/


//============

/*
// Кавычки \' \"

let text = "Привет! Вы на канале \"Фрилансер по жизни!\"";
console.log(text);
*/
//============

/*
// Иконки, символы UTF-16 \uКОД, UTF-32 \u{КОД}

let text = "Живи, а работай в свободное время! \u00A9 \u{1F60D}";
console.log(text);
*/

//===================================================================================
// Работа со строками

/*
//Длина строки. Свойство length

let textOne = "Привет!";
console.log(textOne.length);
*/


//==============================

/*
// Получаем символы строки

let text = "Привет!";
let firstSymbol = text[0];
let lasttSymbol = text[text.length - 1];
console.log(firstSymbol);
console.log(lasttSymbol);


for (const char of text) {
	console.log(char);
}
*/

//==============================

//Изменение строки
/*
let text = "Привет!";
text[6] = ".";
console.log(text);
*/

//==============================

/*
//Изменение регистра

let text = "Привет!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
*/

//==============================

//Поиск подстроки

// Метод str.indexOf(substr, pos)
/*
Он ищет подстроку substr в строке str, начиная с позиции pos,
и возвращает позицию, на которой располагается совпадение,
либо -1 при отсутствии совпадений.
*/
/*
let text = "Привет!";
console.log(text.indexOf('рив'));
console.log(text.indexOf('рив', 3));
*/

// Методы includes, startsWith, endsWith
/*
Более современный метод str.includes(substr, pos) возвращает true,
если в строке есть искомая подстрока, либо false, если нет.
*/
/*
let text = "Привет!";
console.log(text.includes('рив'));
console.log(text.includes('рив', 3));

console.log(text.startsWith('рив'));
console.log(text.endsWith('!'));

*/
// Регистр имеет значение!
/*
let text = "Привет!";
let searchText = "пР";

console.log(text.toLowerCase().includes(searchText.toLowerCase()));
*/

/*
В итоге indexOf стоит использовать тогда когда нам нужна
позиция найденой подстроки.
В остальных случаях удобнее использовать includes
*/


//==============================

// Получение части строки (подстроки)

/*
В JavaScript существует ряд методов получения подстроки.
Но достаточно пользоваться одним.
*/

/*
Метод str.slice(start [, end]) - Возвращает часть строки
от start до end (не включая).
*/
/*
let text = "Привет!";
console.log(text.slice(1, 2));
console.log(text.slice(-2, -1));
console.log(text.slice(1));
*/

//=============================

/*
// Сравнение строк

//Алфавитный порядок
console.log("А" > "Б");
console.log("а" > "Б");

//Алфавитный порядок
console.log('Скрипт' > 'Скрипка');

//Кол-во символов
console.log('Слайдер' > 'Слайд');

//Регистр
console.log('Фрилансер' > 'фрилансер');
*/
/*
Алгоритм сравнения двух строк довольно прост:
1.	Сначала сравниваются первые символы строк.
2.	Если первый символ первой строки больше(меньше),
	чем первый символ второй, то первая строка
больше(меньше) второй.Сравнение завершено.
3.	Если первые символы равны, то таким же образом
сравниваются уже вторые символы строк.
4.	Сравнение продолжается, пока не закончится одна из строк.
5.	Если обе строки заканчиваются одновременно,
	то они равны.Иначе, большей считается более длинная строка.
*/

//========================================================================================================================================================
//========================================================================================================================================================


//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/
/*
// Задача №1. Верна ли запись?
let fls = "фрилансер";
let text = `Привет! Я ${fls}`;
alert(text);



// Задача №2. Получить символ "н" строки:
let text = 'фрилансер';
let a = text.slice(-4, -3));
alert(a);




// Задача №3. Верно?
let text = 123 + "456";
// Ожидаем 579
console.log(text);


// Задача №4. Получить строку в верхнем регистре
let text = 'фрилансер';
let upper = text.toUpperCase();
alert (upper);

// Задача №5. Получить подстроку "лан" из:
let text = 'фрилансер';
let fragment = text.slice(3,6);
alert(fragment)

// Задача №6. true или false ?
let text = 'фрилансер';
console.log(text.includes('лан', 4));
*/

let text = 'фрилансер';
console.log(text.includes('лан', 3));


//========================================================================================================================================================
//========================================================================================================================================================