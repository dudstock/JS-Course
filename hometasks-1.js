'use strict';



/*TASK 1*/
function chekIfEven(a) {
	if (a % 2 == 0){
	console.log('Четное');
	}
	else {
		console.log('Нечетное');
	}
};
chekIfEven(1);
chekIfEven(2);
chekIfEven(3);

let a = 167;
chekIfEven(a);


/*TASK 2*/
function secInDay(d, h, m) {
  console.log("Секунд в сутках" + " " + d*h*m);
}
secInDay(24, 60, 60);



/*TASK 3*/
let S, T;
console.log('Средняя скорость = ' + S/T + 'км/ч');


/*TASK 4*/
let a, b, c, x;
console.log(a*x*x + b*x + c);


/*TASK 5*/
let x, n;
x = x*n;
console.log(x);


/*TASK 6*/
function changeValue(a, b){
  c = a;
  a = b;
  b = c;
  console.log('a = '+ a);
  console.log('b = ' + b);
}
changeValue(5, 7);
changeValue(33, 22);

let a = 0, b = 2;
changeValue(a, b);


// 8. Мальчик плюнул прямо вверх со скоростью 10м/c, через сколько времени он пожалеет об этом? g = 10 м/с


// 9.  Дано целое число. Определить значение его самой младшей цифры. (Оператор %)

function number(a) {
  console.log(a % 10);
}

number(663);


// 10. Переменные A, B, C содержат числовые значения. 
// a.  Проверить, могут ли их значения быть сторонами треугольника
// b.  Вычислить площадь треугольника, если значения могут быть сторонами треугольника

function myTriangle(a, b, c) {
  if (a < (b + c) || b < (a + b) || c < (a + b)) {
    console.log('this numbers are not Triangle');
  } 
  else {
    console.log('squeare of Triangle = ' + a*b/2);
  }
}

myTriangle(7, 8, 22);


// 11. Переменная X содержит трехзначное число. 
// a.  Проверить, является ли число целым (использовать встроенные в js функции)
// b.  Поместите в переменную SUM сумму цифр этого числа

function number(x){
  if (Number.isInteger(x)) {
    let a, b, c, sum;
    a = x % 10;
    b = x/10;
    b = parseInt(b, 10) % 10;
    c = x/100;
    c = parseInt(c, 10) % 10;
    
    sum = a + b + c;
    console.log(sum);
  }
  else {
    console.log('number is not Integer');
  }
}

number(369);


// 12. Вычислите расстояние между двумя точками имеющими координаты X1, Y1 и X2, Y2 
function distance(x1, x2, y1, y2) {
  console.log(Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)));
}
distance(3, 7, 2, 8);


// 13. Покажите на экране таблицу умножения одноразрядных двоичных чисел (это числа 0 и 1)

// 15. Напечатать большее из трех чисел: x, y, и z
function largeNumber(x, y, z) {
  if (x > y && x > z) {
    console.log(x);
  }
  else if (y > x && y > z) {
    console.log(y);
  }
  else {
    console.log(z);
  }
}
largeNumber(3, 7, 2);


// 16. Выведите первые 9 степеней числа 2
function number(a = 1) {
  if (a <= 9) {
    console.log(Math.pow(2, a++));
    return number(a);
  }
}

number();


// 17. Написать программу, которая выводит все четные числа в диапазоне [0, 100]
// a.  С помощью цикла for
// b.  C помощью цикла while
function numbers() {
  for (let x = 0; x <=100; ++x) {
    if (x % 2 === 0) {
      console.log(x);
    }
  }
}
numbers();

function numbers(x) {
  while (x <= 100) {
    if (x % 2 === 0) {
      console.log(x);
    }
    ++x;
  }
}
numbers(0);



// 18. Напишите программу, которая выводит сумму чисел от 1 до 10000
function sumNumbers() {
  let a = 1, sum = 0;
  while (a <= 10000) {
    a++;
    sum += a;
  }
  console.log(sum);
}
sumNumbers();


// 19. Напишите программу, которая выводит все простые числа из интервала от 2 до 1000.
// Простое число - натуральное число, большее 1, которое ни на что не делится, кроме себя и 1.
// Результат должен быть: 2,3,5,7 и т. д.


// 20. Дана строка 'я учу javascript!'. 
// Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice)
function srting(){
  let str = 'я учу javascript!';
  // substr
  console.log(str.substr(2, 3));
  console.log(str.substr(-11, 10));
  
   console.log();
  // substring
  console.log(str.substring(2, 5));
  console.log(str.substring(16, 6));
  
   console.log();
  // slice
  console.log(str.slice(2, 5));
  console.log(str.slice(6, -1));
}
srting();


// 21. Написать программу, которая преобразует первый символ строки в заглавный регистр, а все остальные в строчный
function srting(){
  let str = 'я учу javascript!';
  console.log(str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
}
srting();


// 22. Написать программу, которая определяет, содержит ли строка слово spam. 
// (слово может быть записано в разных регистрах: spam, SPAM, etc.)
function findSpam(){
  let str = 'lorem  ipsum SPAM';
  str = str.toLowerCase();
  
  if (str.indexOf('spam') > 0) {
    console.log("That text have SPAM");
  }
  else {
    console.log("There is no SPAM");
  }
}
findSpam();

// 2 version
function findSpam(){
  let str = 'lorem  ipsum SPAM';
  str = str.toLowerCase();
  
  if (~str.indexOf('spam')) {
    console.log("That text have SPAM");
  }
  else {
    console.log("There is no SPAM");
  }
}
findSpam();



// 23. Написать программу, которая выводит посимвольно строку в следующем формате: “индекс символа” - “сомвол”.
// Пример: для строки “abc” результат будет таким
// 0 - a
// 1 - b
// 2 - c
function anyLetter() {
  let str = 'Lorem Ipsum', length = str.length, i = 0;
  while (i < length) {
    console.log(i + ' - ' + str.charAt(i));
    ++i;
  }
}
anyLetter();



// 24. Дана строка и переменная с максимально допустимой длиной строки. Написать программу, которая, 
// если строка превышает максимально допустимую длину, обрезает строку и заменяет конец на “...” так, 
// чтобы длина строки стала равна максимально допустимому значению
function reductionString(x){
  str = 'Дана строка и переменная с максимально допустимой длиной строки. Написать программу, которая, если строка превышает максимально допустимую длину';
  if (x < str.length) {
    console.log(str.substring(0, (x - 3)) + '...');
    // console.log(str.length);
  }
}
reductionString(15);



// 26. Преобразуйте первую букву каждого слова строки в верхний регистр
function firstLetterUpper(){
  let str = 'я учу javascript!', masStr = str.split(' '), i = masStr.length, x = 0, upper;
  while (x < i) {
    masStr[x] = masStr[x].charAt(0).toUpperCase() + masStr[x].slice(1).toLowerCase();
    ++x;
  }
  console.log(masStr.join(' '));
}
firstLetterUpper();


// 28. Написать программу, которая разворачивает порядок слов в строке. Пример: “Hello, world!” станет “world! Hello,”
function changeWords(){
  let str = 'Hello World!', elMas;
  str = str.split(' ');
  elMass = str.pop();
  str.unshift(elMass);

  console.log(str.join(' '));
}
changeWords();

// 2 version
function changeWords(){
  let str = 'Hello World!';
  str = str.split(' ');
  str.reverse();

  console.log(str.join(' '));
}
changeWords();



// 30. Напишите программу, которая выводит на экран следующую фигуру (использовать вложенные циклы)
// ********
// **    **
// **    **
// ********

// Незаконченное
function image(){
  let arr = [], i = 0, str = 0;
  while (i <= 7) {
    arr.unshift('*');
    ++i;
  }
  while (str < 4) {
    if (str === 0 || str === 3) {
      console.log(arr.join(' '));
    }
    else {
      arr.splice(2, 4, "       ");
      console.log(arr.join(' '));
    }
    ++str;
  }
  // console.log(arr);
}
image();