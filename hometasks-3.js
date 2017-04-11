'use strict';


function sumNumber(n) {
  if (n == 1) return 1;
  let result = sumNumber(n - 1);
  return n + result;
}

let res = sumNumber(10);
console.log(res);


// Buble sort
function bubbleSort(arr) {
  let haveChange = true;
  
  while (haveChange) {
    haveChange = false;
    
    for (i = 0; i < arr.length; ++i) {
        if (arr[i] > arr[i + 1]) {
    			let a = arr[i];
    			arr[i] = arr[i + 1];
    			arr[i + 1] = a;
    			
    		  haveChange = true;
        }
  		}
	  }
  return arr;
}

let result = bubbleSort([3, 2, 7, 6, 4, 5, 1]);

console.log(result);


// Insertion sort
function Sort(arr) {
    
    for (i = 1; i < arr.length; ++i) {
      for (j = 0; j < arr.length; ++j) {
        
        if (arr[i] < arr[j]) {
    			let a = arr[i];
    			arr[i] = arr[j];
    			arr[j] = a;
        }
  		}
    }
	
  return arr;
}

let result = Sort([3, 2, 7, 6, 4, 5, 1]);
console.log(result);





// 2.	Реализовать следующую задачу и оценить ее сложность так, как мы это делали на занятии 
// (подробно, не просто Big O): Если мы перечислим все натуральные числа меньше 10ти, 
// которые кратны 3 или 5, мы получим: 3, 5, 6, 9. Их сумма равна 23. 
// Найти сумму всех натуральных чисел, которые кратны 3 или 5 и меньше 1000.
function integers(n){
  let sum = 0;
  for (let i = 0; i < n; ++i) {
    
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  console.log(sum);
}
integers(1000);