/*
전역 객체(global object)

node: global
browser: window
*/

var i = 10; 
global.n = '둘리';
console.log(global.n, n);

var email = 'dooly@gmail.com';
console.log(global.email, email); //global.email는 전역 범위를 두고 있다? ㄴ

// f1();