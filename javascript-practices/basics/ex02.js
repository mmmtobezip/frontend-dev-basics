/*
변수와 자료형(data type)

[기본 타입, primitive type]
- undefined
- number
- string
- boolean

[객체 타입**, object type]
- object
    1. new 생성자 함수 사용해서 생성
    Number()     => object 타입의 객체
    String()     => object 타입의 객체
    Boolean()    => object 타입의 객체
    Object()     => object 타입의 객체
    Array()      => object 타입의 객체
    Date()       => object 타입의 객체
    RegExp()     => object 타입의 객체
    Function()   => object 타입의 객체

    2. {}
    3. []
    4. null
- function
*/

console.log("=== 기본 타입(undefined, number, string, boolean ===");
var u;
var i = 10.7;
var s = 'hello world';
var b = true;


console.log("u:" + typeof(u));
console.log("i:" + typeof(i));
console.log("s:" + typeof(s));
console.log("b:" + typeof(b));

console.log("=== 객체 타입(object) ===");
var i2 = new Number(10);
var s2 = new String("hello world");
var b2 = new Boolean(false);
var o = {};
var a = [];
var n = null;

console.log("i2:" + typeof(i2) + ":" + (i2 instanceof(Number)));
console.log("s2:" + typeof(s2) + ":" + (s2 instanceof(String))); //함수의 경우 기능, 생성자 2가지 역할을 한다. -> 생성자의 경우 객체 생성 후 그 안에 데이터를 초기화하는 
console.log("b2:" + typeof(b2) + ":" + (b2 instanceof(Boolean)));
console.log("o:" + typeof(o) + ":" + (o instanceof(Object)));
console.log("a:" + typeof(a) + ":" + (a instanceof(Array)));
console.log("n:" + typeof(n)); //null은 new() 생성 불가 

console.log("=== 객체타입(function) ===");
var i = 10;
var o = {};

//1. 첫 번째 함수 선언 방식 
//i = 10 같이 함수를 정의하는 것과 같음. 
function f1(a, b) {
    return a + b;
}
//2. 두 번째 함수 선언 방식
var f2 = function(a, b) {
    return a + b;
}
//3. 세 번째 함수 선언 방식(잘 안쓰는 방법 - 내부 구조에 맞추기 위한 방법일뿐)
var f3 = new Function('a', 'b', 'return a+b;');

//함수 호출 연산자 -> 함수 객체가 생성되는 단계
console.log(f1(10, 20), f2(10, 20), f3(10, 20));
console.log("f1:" + typeof(f1));
console.log("f2:" + typeof(f2));
console.log("f3:" + typeof(f3)); //function 타입의 객체 

console.log("=== Primitive Type도 메서드를 호출할 수 있다.(유사객체) ==="); //js에만 있는 특징 
console.log(b2.valueOf());
console.log(b.valueOf());  //new Boolean(b)를 넣어 객체로 만든 후, .valueOf()메서드를 부르고 사라지는 방식 => b.valueOf() -> 기본타입 b가 boolean이라면 호출하기 위해 객체로 만든 후(new Boolean(b)), valueof()를 호출하고 나온 결과를 변수로 따로 잡지 않았기에 해당 라인에서 호출되고 바로 사라진다.  = console.log(new Boolean(b).valueof()); = 메서드를 호출할 수 있는 원시 타입을 호출한다고 이해하자
