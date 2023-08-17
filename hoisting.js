// hoisting : all declairation put in starting of code before call by js intpreter
// but in js we create any process with var it does not work  and give value undefined

hello();
function hello(){
    console.log("hello");
}

// var x;
// // auto generat x = undefined
// console.log(x);
// x = 7;  

"use strict"

// use strict mode use for we follow syntax properly

// x = 4;
// console.log(x);