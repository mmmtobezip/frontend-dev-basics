/*
Arrow Function
*/

const power = function(x) {
    return x*x;
}

const nums = [1, 2, 3, 4, 5];
// 방법1: console.log
nums.forEach(function(e) {
    console.log(`${e}: ${power(e)}`);
});

// 방법2 (can only node.js): process.stdout.write
nums.forEach(function(e) {
    process.stdout.write(`${e}: ${power(e)}\t`); // \t: tab 
});

// ex1
console.log("\n------------------------------");
nums.forEach(function(e) {
    // const result = (function(x) {
    //     return x*x;
    // })(e);
    
    // 화살표 함수 사용 1
    // const result = ((x) => {
    //     return x*x;
    // })(e); 

    // 화살표 함수 사용 2
    const result = (x => x*x)(e); 

    // 화살표 함수 사용 3 
    // const result = (f) => {
    //     return x*x;
    // }
    process.stdout.write(`${e}: ${result}\t`);
});

// ex2
console.log("\n------------------------------");
nums.forEach(function(e) {
    // Before 
    // const result = (x => x * x)(e);

    // After
    process.stdout.write(`${e}: ${(x => x * x)(e)}\t`);
});

// ex3
console.log("\n------------------------------");

// Before 
// nums.forEach(function(e) {
//     process.stdout.write(`${e}: ${(x => x * x)(e)}\t`);
// });

// After
nums.forEach(e => process.stdout.write(`${e}: ${(x => x*x)(e)}\t`));


// ex04: this를 어휘상에서 바인딩 할 수 있다 
console.log("\n-----dooly-------------------------");
const dooly = {
    name: '둘리',
    friends: ['또치', '도우너', '마이콜'],
    // printFriends: function() {
    //     console.log(this);  //printFriends: [Function: printFriends]
    //     this.friends.forEach(function(friend) { // this = const dooly 
    //         console.log(`${friend}의 친구 ${this.name}`);
    //     }.bind(this)); // 화살표 함수 사용 시 bind() 대체 가능 
    // }

    printFriends: function() {
        this.friends.forEach(friend => {
            console.log(`${friend}의 친구 ${this.name}`);
        });
    }
}

dooly.printFriends();
