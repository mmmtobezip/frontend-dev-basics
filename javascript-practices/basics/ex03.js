/* null과 undefined */

var myVar1 = undefined; //명시적으로 undefined 대입
var myVar2; //암시적으로 undefined 명시
var myVar3 = null; //명시적으로 null 대입 

console.log("==================");
/*
===(동일성) 비교 연산 
1. 타입의 동일성
2. 타입이 같은 경우 
    2-1. primitive type: 값의 동일성
    2-2. object type: 객체의 동일성
*/
console.log('4' === 4);
console.log(1 === true);
console.log('abc' === new String('abc'));
console.log(4 === 2); 
console.log(new Number(10) === new Number(10)); //객체의 동일성 비교 o1과 o2 객체는 동일하지 않음