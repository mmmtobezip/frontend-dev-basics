/*
자바 스크립트 객체3 - 확장
*/

var o = {
    name: "둘리",
    age: 10
}; //;를 붙으면 표현식 구문이 된다?

var f = function() {
    console.log("Hello World");
}

console.log("=== 확장(object 타입) ===");
o.another = {
    name: "마이콜",
    age: 20,
    print: function() { //print = 함수 객체 
        console.log(this.name, this.age); //객체 안에 있는 함수에서, this는 객체 자신을 가리킨다. 
    }
}

console.log(o);
o.another.print();

console.log("=== 확장(function 타입) ===");
f.another = {
    name: "마이콜",
    age: 20,
    print: function() {
        console.log(this.name, this.age); 
    }
};

console.log(f);
f.another.print();

console.log("=== 확장: 기본 타입()은 확장되지 않는다. ===");
var i1 = 10;
var i2 = new Number(10);

console.log(i1 + ":" + i2 + ":" + (i1+i2));

//i2는 object type이므로 확장 가능 
i2.another = {
    name: "마이콜",
    age: 20
}
console.log(i2.another);

i1.another = {}; // (new Number(i1)).another = {};
console.log(i1.another); // console.log((new Number(i1)).another) another 미정의 오류-> i1은 기본 타입(primitive)은 확장 불가능