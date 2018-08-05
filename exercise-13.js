// // TEST CASES
// console.log(xo('xoxoxo')); // true
// console.log(xo('oxooxo')); // false
// console.log(xo('oxo')); // false
// console.log(xo('xxxooo')); // true
// console.log(xo('xoxooxxo')); // true

// Problem
// Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
// Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.



//var word = 'xxooo'
function xo(str){
var y = str.split('o')
var hasilY = y.length-1

var x = str.split('x')
var hasilX = x.length-1

if (hasilX == hasilY){
    return true
  }  else {
    return false
  }
}
 console.log(xo('xoxoxo')); // true
 console.log(xo('oxooxo')); // false
 console.log(xo('oxo')); // false
 console.log(xo('xxxooo')); // true
 console.log(xo('xoxooxxo')); // true




