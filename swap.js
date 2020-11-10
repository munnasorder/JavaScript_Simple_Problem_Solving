//before swap
var a = 5;
var b = 6;

//After swap
var temp = a;
var a = b;
var b = temp;
console.log("after swap ", "a = ", a, "b = ", b);
//expected output: after swap  x =  20 y =  10

//Another way of doing the same thing 
//before swap
var x = 10;
var y = 20;

//after swap
var x = x + y; 
var y = x - y;
var x = x - y;
console.log("after swap ", "x = ", x, "y = ", y);
//expected output: after swap  x =  20 y =  10

// The above tasks can be done very easily in JavaScript.
var p = 7;
var q = 8;
[p,q] = [q,p] //Set p & q with an array then invert its value
console.log("after swap ", "p = ", p, "q = ", q);
//expected output: after swap  p =  8 q =  7