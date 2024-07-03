/*
자바 스크립트 객체1 - object 타입 

1. 자바 스크립트 객체는 function 타입과 object 타입 2가지 
2. 보통 function 타입의 객체를 "함수"라고 부름
3. 자바 스크립트에서 객체라고 부르는 것은 "object 타입의 객체"를 가르킨다. 

Object 타입 객체 생성 방법1 
1. 생성자 함수 사용 
    1-1. new()를 통한 object 타입 객체 생성 
    - Number, Boolean, String, Object, Array 내장 객체(=생성자 함수) 
    1-2. 사용자 정의 생성자 함수(내장 객체가 아닌 스스로 만든 함수, 대소문자로 구분) 
*/

//1-2 예제 
var o1 = new Object(); 
//속성 동적 추가, name이라는 attribute 생성 
o1.name = "둘리"; 
o1.age = 10;
//객체 확장 가능 
o1.antoher = new Object();
o1.antoher.name = "마이콜";
o1.another.age = 20;

console.log(o1);

/*
Object 타입 객체 생성 방법2
1. {} literal 사용 
*/
var o2 = {};
o2.name = "둘리";
o2.age = 10;
o2.antoher = new Object();
o2.another.name = "마이콜";
o2.antoher.age = 20;

console.log(o2); 

/*
Object 타입 객체 생성 방법3
1. JavaScript Object Notation(JSON) 사용 
*/
var o3 = {
    name: "둘리",
    age: 10,
    another: {
        name: "마이콜",
        age: 20
    }
};
console.log(o3);

// XmlHttpRequest 객체 생성을 통한 통신(AJAX)
// SpringBoot(서버)쪽에서 String으로 응답을 주면, xmlHttpRequest 객체를 통해서 응답을 받고,
// eval() 함수를 사용하면, 문자열을 자바스크립트 코드 = 객체로 변환 가능 
var response = '{name: "둘리", age: 10, email: "dooly@gmail.com"}';
var userVo = eval('(' + response + ')');
console.log(userVo.name + ":" + userVo.age + ":" + userVo.email);