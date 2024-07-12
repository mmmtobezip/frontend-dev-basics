// Array 함수 - map
const a = [1, 2, 3];
const a2 = a.map((e) => { 
    //[map 동작 방식]
    //callback을 통해 element를 가져와 새로운 a2 배열에 담는다. 
    //e와 같은 크기의 배열을 a2로 만들고, callback을 계속 실행 -> 
    //리턴되는 값을 새로이 생성한 a2 map배열에 넣고, 순환이 전부 끝나면 해당 a2배열 리턴 

    return e * e;  
});

console.log(a, a2); //[1,2,3] [1, 4, 9]

// Array 함수 - filter 


// Array 함수 - reduce 