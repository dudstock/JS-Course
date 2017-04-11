'use strict';


// 1.	Задано число n. Сложить четные числа до 2*n (без рекурсии)
function sumNumbers(n){
  let i = 0, sum = 0;
  while(i <= 2*n) {
    if (i % 2 === 0) {
      sum += i;
    }
    ++i
  }
  console.log(sum);
}
sumNumbers(8);



// 2.	Напишите рекурсивную функцию, которая принимает на вход положительное число N и возвращает сумму чисел от 1 до N
function sumNumber(n) {
  if (n == 1) return 1;
  let result = sumNumber(n - 1);
  return n + result;
}

let res = sumNumber(5);
console.log(res);




// 5.	Написать функцию для умножения 2х матриц (без рекурсии)
// function multMatrix(n, m) {
//   let mult = 1;
//   for (i = 0; i < n.length; ++i) {
//     mult = mult*n[i];
//   }
//   for (i = 0; i < m.length; ++i) {
//     mult = mult*m[i];
//   }
//   console.log(mult);
// }
// multMatrix([1, 2, 3], [1, 2]);




// 7.	Написать функцию, которая принимает на вход 3 аргумента: первый - индекс в массиве, второй - элемент, который нужно добавить в место под индексом в массиве, третий - сам массив. Функция должна добавить элемент в определенную позицию в массиве, сместив все остальные элементы. (без рекурсии)
// Пример: дан массив [1, 2, 3], необходимо добавить число 2.5 в позицию 2. В результате должно получиться: [1, 2, 2.5, 3]
function addElem(index, el, arr) {
  arr.splice(index, 0, el);
  console.log(arr);
}
addElem(2, 2.5, [1, 2, 3, 4, 5]);




// 8.	Дан массив n * n, состоящий из любых чисел (не обязательно повторяющихся или одинаковых). 
// Написать функцию, которая посчитает сумму всех его элементов. Пример: для массива ниже сумма будет 75
function sumArr(n) {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
    for (let j = 0; j < n[i].length; ++j ) {
      sum += n[i][j];
    }
  }
  console.log(n);
  console.log('SUMM = ' + sum);
}
sumArr([[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 13, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 5, 5]]);




// 9.  Дан массив строк. Написать функцию, которая возвращает новый массив, 
// содержащий только уникальные элементы исходного массива (без рекурсии)

function unicEl(arr, newMas = []){
  for (let i = 0; i < arr.length; ++i) {
    
    let index = newMas.indexOf(arr[i]);
    if (index === -1) {
      newMas.push(arr[i]);
    }
  }
  console.log(newMas);
}
unicEl(['mac', 'true', 'false', 'mac', 'two', 'two']);




// 10. Даны два целых числа A и В. Выведите все числа от A до B включительно, 
// в порядке возрастания, если A < B, или в порядке убывания в противном случае. Использовать рекурсию

function twoNumbers(a, b){   /*рекурсия!!!*/
  if (a > b) {
    console.log(a);
    return twoNumbers(--a, b);
  }
  else if (a < b) {
    console.log(a);
    return twoNumbers(++a, b);
  } 
  else if (a = b) {
    console.log(a);
  }
}

twoNumbers(5, 12);





// 11. Дано натуральное число N. Вычислите сумму его цифр, используя рекурсию 
// (Это аналог задачи из прошлого дз). При решении этой задачи нельзя использовать строки, массивы, циклы.

function numeralSum(n, summ = 0) {   /*рекурсия!!!*/
  if (n != 0) {
    let m = n % 10;
    n = n / 10;
    n = parseInt(n, 10);
    summ += m;
    return numeralSum(n, summ);
  }
  console.log(summ);
}
numeralSum(123456);


function numeralSum(n) {    /*без рекурсии!!!*/
 let summ = 0;
 
 while (n != 0) {
    let m = n % 10;
    n = n / 10;
    n = parseInt(n, 10);
    summ += m;
  }
  console.log(summ);
}
numeralSum(1234);



// 12.  Дано слово, состоящее только из строчных букв. 
// Проверьте, является ли это слово палиндромом. Использовать рекурсию

function palindromWord(str) {       /*без рекурсии!!!*/
  let length = str.length, result;
  for (let i = 0; i < length; i++) {
    if (str[i] == str[length - 1 - i]) {
      result = true;
    }
    else {
      result = false;
      break;
    }
  }
  console.log(result);
}
palindromWord('шалаш');


function palindromWord(str, i = 0) {         /*рекурсия!!!*/
  let length = str.length;
  if (i > length) {
    return console.log(result);
  }
  else if (str[i] === str[length - 1 - i]) {
    result = 'Word is Palindrome';
    return palindromWord(str, ++i);
  }
  else {
    result = 'Word is not Palindrom';
    return console.log('Word is not Palindrome');
  }
}
palindromWord('шалаш');



// 13. Дан массив, содержащий последовательность натуральных чисел. 
// Используя рекурсивную функцию вывести все нечетные элементы этого массива, сохраняя их порядок.
// Пример: исходный массив: [2, 4, 5, 6, 11, 22]. Вывод: 5 11.

function mass(n) {          /*без рекурсии!!!*/
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 !== 0) {
      console.log(n[i]);
    }
  }
}
mass([2, 4, 5, 6, 11, 22]);


function mass(n, i = 0) {         /*рекурсия!!!*/
  if (i >= n.length) {
    return;
  }
  else if (n[i] % 2 !== 0) {
    console.log(n[i]);
    return mass(n, ++i);
  } 
  else {
    return mass(n, ++i);
  }
}
mass([2, 4, 5, 6, 11, 22]);




// 14. Дан массив, содержащий последовательность натуральных чисел. 
// Написать рекурсивную функцию, которая возвращает максимальное число в массиве.

function biggestNumber(n, i = 0, bigNum = 0){         /*рекурсия!!!*/
  if (i >= n.length) {
    return console.log(bigNum);
  }
  else if (n[i]> bigNum) {
    bigNum = n[i];
    return biggestNumber(n, ++i, bigNum);
  }
  else {
    biggestNumber(n, ++i, bigNum);
  }
}

biggestNumber([1, 2, 13, 6, 7, 5]);



// 15.  Напишите функцию, которая используя рекурсию проверяет, является ли число N простым. 
// (Необходимо проверить, делится ли число N на любое из чисел меньше N)

function primeNum(n) {        /*без рекурсии !!!*/
  let res = true;
  if (n == 2 || n % 2 == 0) {
     console.log('This number is not Prime');
  }
  else {
    for (let i = 2; i < n; i++) {
      if (n % i !== 0) {
        res = false;
      }
      else {
        res = true;
        break;
      }
    }
    if (res == false) {
      console.log('This is Prime number');
    }
    else {
      console.log('This number is not Prime');
    }
  }
}
primeNum(15);


function primeNum(n, index = n - 1) {         /*рекурсия!!!*/
  if (index <= 1) {
    return true;
  }
  else if (n % index === 0) {
    return false;
  } else {
    return primeNum(n, --index);
  }
}
primeNum(16);


// 16. Напишите рекурсивную функцию “flatten”, которая "выравнивает" массив. 
// Например: flatten([1,[2],[3,[[4]]]]); -> [1,2,3,4]

function flatten(arr){
  let newArr = [];
  for (let i = 0; i < arr.length; ++i) {
    let el = arr[i];
    if (Array.isArray(el)) {
      newArr = newArr.concat(flatten(arr[i]));
    }
    else {
      newArr.push(el);
    }
  }
  return newArr;
}
flatten([1,[2],[3,[[4]]]]);