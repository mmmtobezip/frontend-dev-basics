/*
자바스크립트 함수: function 
*/


// 함수 생성(정의) 방법 1
function f1(a, b) {
}
console.log(typeof(f1), f1(10, 20));

// 함수 생성(정의) 방법 2
var f2 = function(a, b) {
    return a + b;
}
console.log(typeof(f2), f2(10, 20));

// 함수 생성(정의) 방법 3
var f3 = new Function('a', 'b', 'return a + b'); // 마지막 파라미터엔 함수 블록 
console.log(typeof(f3), f3(10, 20));

// 함수 생성(정의) 방법 4: 익명(Anonymous) 함수
setTimeout(function() {
    console.log("time out!");
}, 1000);

// 함수를 생성하는 방법 5: 즉시 실행 함수
var s = (function(a, b) {
    return a + b;
})(10, 20);
console.log(s);

// 가변 파라미터
// 내장되어있는 this, 함수안에선 arguments 
// arguments는 배열과 유사, 파라미터의 값만 가지고 있음. e.g. [1, 2, 3, 4]
var sum = function() {
    // arguments

    // 구현 1
    // for(var i = 0; i < arguments.length; i++) {
    //     sum += arguments[i];
    // }

    // 구현 2
    // arguments.forEach(function(e) {
    //     sum += e;
    // })

    // 찐 해결 방법 
    // Array.prototype.forEach 직접 호출 + caller 바꾸기
    // apply의 경우 arguments만 가지고 있을 때 사용 가능
    // call의 경우 파라미터 있는 경우 사용하므로, 함수 파라미터도 있는 경우 사용 가능 
    Array.property.forEach.call(arguments, function(e) {
        sum += e;
    });

    return sum;
}
console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));