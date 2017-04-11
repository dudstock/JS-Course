'use strict';


// a.  arrayToList - Принимает на вход массив со значениями (Например [1, 2, 4, ‘test’, 10]) и формирует из него список как на картинках выше.
// arrayToList([10, 11, 9, 7]) - должен вернуть то же самое, что на картинках

function arrayToList (arr) {
  let list = {}, length = arr.length, num;
  list.value = arr[0];
  
  function addElement (list, num) {
    return (list.next = { value: num, next: null });
  }
  let lastNode = list;
  for (let i = 1; i<length; i++) {
    lastNode = addElement(lastNode, arr[i]);
  }
  return console.log(JSON.stringify(list, null, ' '));
}

arrayToList ([10, 11, 9, 7]);



// b.  listToArray - Выполняет обратное действие: из списка делает массив.
// listToArray(list) - должен вернуть [10, 11, 9, 7]
