/*
named export

1. 
exports(require) != es6 export default

2. import하는 모듈에 destructing 가능 
*/

export const add = function(a, b) {
    return a + b;
}

export const subtract = function(a, b) {
    return a - b;
}