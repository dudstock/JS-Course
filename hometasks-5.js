'use strict';




let list = {
  value: 1
};
function addElement (list, num) {
  return (list.next = {value: num, next: null});
}
let next = list;
for (let i = 1; i< 10; ++i){
  next = addElement (next, i);
}
console.log(JSON.stringify(list, null, ' '));

/* ----------------------------------------!!!!!!!!!!!!!!!------------------------------------------ */



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