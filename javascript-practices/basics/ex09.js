/*
자바스크립트 객체4 - prototype(원형) 기반의 상속과 오버라이딩: 자바스크립트 객체지향 프로그래밍 
    -> object type의 경우 모든 객체들의 확장 가능 
*/
//내장 객체 Number, String, Boolean, Object, Array, Date, RegExp, Function의 prototype을 확인할 예정
var MyObject = function(name, age) {
    this.name = name;
    this.age = age;
}

MyObject.prototype.school = "bitacademy";
MyObject.prototype.course = "poscodx 8기";
MyObject.prototype.info = function() {
    console.log(this.name + ":" + this. age + ":" + this.school + ":" + this.course);
}

// MyObject 인스턴스 생성1
var o1 = new MyObject("둘리", 10);
o1.info();
o1.school = 'poscodx';
o1.info();

// MyObject 인스턴스 생성2
var o2 = new MyObject("마이콜", 20);
o2.info = function() {
    console.log("secret");
}
o2.info();

// MyObject 인스턴스 생성3
/*
MyObject는 함수 타입의 table이 생성됨. 
자바스크립트 객체가 내부적으로 동작하는 방식을 알아보자 
function타입은 실행 코드 & prototype을 가지고 있고, 
이후, new()를 통해 만들어진 object 타입은 constructor, prototype, __proto__를 가지고 있다. 

prototype chain으로 객체들이 생성되고 엮여있다. 

상속과 오버라이딩은 
new를 통해 만들어진 object 타입의 객체는 자신을 만들어지게 한 생성자 함수의 prototype을 가르키고, 
__proto__을 통해 그 값을 찾아다닌다. (chain 관계)
*/ 