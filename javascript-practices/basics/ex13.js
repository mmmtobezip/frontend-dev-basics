/*
string primitive 타입과 String 객체 함수(String.prototype.*)
*/

// 배열처럼 접근 가능 
var str1 = "Hello World";
for(var i = 0; i < str1.length; i++) {
    console.log(str1[i]);
}

// 문자열 합치기 
var str2 = "hello";
var str3 = "world";
var str4 = str2 + " " + str3;
console.log(str4);

// casting
var str5 = "5" + 5;
console.log(str5);

var str6 = "boolean:" + true;
console.log(str6);

// 객체 함수
var str7 = "string1 string2 string3";

var index = str7.indexOf('string2'); // string2의 인스턴스 반환 -> 8 
console.log(index);

index = str7.indexOf('string5');
console.log(index); // 없을 경우 -1

var str8 = str7.substring(10/*firstIndex*/, 13/*lastIndex -1*/); //substr 사라짐
console.log(str8);

var a = str7.split(" ");
console.log(a);

a = str7.split(":"); 
console.log(a);