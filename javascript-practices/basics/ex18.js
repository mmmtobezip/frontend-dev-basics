/*
클로저(closure): 함수가 정의될 때 그 함수와 변수 스코프(scope)와의 조합 
1. 클로저는 자신이 생성될 때의 스코프를 기억하는 함수(e.g. var s) 
2. 클로저는 함수가 자신이 정의될 때 스코프를 기억하며 자신이 정의될 때 스코프 밖에서 호출되어도 그 해당 스코프에 접근할 수 있는 함수(e.g. Lexical Scope 코드 참고)

Q) 왜 쓸까? 
    - 상태 유지 e.g. react's useSate 
    - 전역 변수 회피 e.g. react's useSate(inner를 마음껏 접근하고 싶을 때)

*/

/* Lexical Scope */
var f1 = function() {
    var s = 'hello world';
    const inner = function() {
        console.log(s);
    }

    inner();
}

f1();

/* Closure */
var f2 = function() {
    var s = 'hello world';
    var inner = function() {
        console.log(s);
    }

    return inner; 
}

var closure = f2(); // closure 호출 시 렉시칸 스콥으로 볼 때, f2() 호출 후에는 함수 블록이 끝났고, s변수는 사라져야 하는데, 
// return된 inner값은 f2가 받고 이게 clousre 변수에 들어감.  함수(inner)와 변수 스콮(s)가 조합을 이루는 함수를 closure라고 한다.
//변수가 함수 범위에 묶이는 과정을 Lexical Scope라고 한다.

