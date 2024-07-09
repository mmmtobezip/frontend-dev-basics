/*
let & const 
*/

// 1. let
try {
    if(true) {
        var i = 10; //전역 범위 
        let j = 20; //블록 범위 
    }
    console.log(i);
    console.log(j); // 실행 -> error:ReferenceError: j is not defined
} catch(e) {
    console.error('error:' + e);
}