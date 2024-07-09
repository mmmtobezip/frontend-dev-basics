/*
let & const
*/

// 1. const 블록 범위: 상수
try {
    if(true) {
        const NUM = 10; //블록 범위 
    }
    console.log(NUM); // error: ReferenceError: NUM is not defined

} catch(e) {
    console.error('error:' + e);
}

// 2. 대입(Assignment) 에러 
try {
    const NUM = 20; // 마지막 대입 like final 
    NUM = 30; // error: Assignment to constant variable.
} catch(e) { //catch로 받아서 코드 실행 가능, 없앨 경우 노드가 에러를 처리함. (에러가 타고 나간다.)
    console.error('error:' + e);
}