/*
자바 스크립트 객체2 - function 타입 
*/

// 일반 함수(실행 코드 블록이 존재하는 함수, 관례적으로 소문자로 시작)
var myFunction = function() {
    console.log("일반 함수");
}

// 생성자 함수(관례적으로 대문자로 시작)  
// this 키워드 사용
// 파라미터로 들어온 this를 받아서 동적으로 생성된 객체에 속성 추가 (attribute로 사용)
var MyObject = function(name, age) {
    this.name = name;
    this.age = age;
}

var o1 = new MyObject("둘리", 10);
var o2 = new MyObject("마이콜", 20);
console.log(o1);
console.log(o2);

// 번외: var MyObject()와 동일한 방법, class타입이 풀린 게 위에 있는 방법 
// class MyObject {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }