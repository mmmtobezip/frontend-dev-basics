/*
Array 객체 함수: Array.prototype.*
*/

var colors = ['black', 'white', 'yelow'];
var fruits = ['apple', 'mango', 'banana'];

// concat
console.log("=== concat ===");

var a1 = fruits.concat(colors);
console.log(a1);

// pop, push: stack 지원
console.log("=== stack 지원 ===");

var color = colors.pop();
console.log(color, colors);

colors.push('red');
console.log(colors);

// join
console.log("=== join ===");

var s = fruits.join(":"); //배열에 해당하는 요소들을 join으로 연결하여 하나의 문자열로 만든다.
console.log(s);

// reverse
console.log("=== reverse ===");

console.log(fruits);
fruits.reverse();
console.log(fruits);

// shift 
console.log("=== shift ===");

var numbers1 = [1000, 3000, 2000, 5000, 4000, 8000];
var number = numbers1.shift(); //왼쪽부터 하나씩 이동 
console.log(number, numbers1);

// slice
console.log("=== slice ===");

var numbers2= numbers1.slice(1, 3); // 1번째부터 3번째까지의 요소를, 즉 3번째 전까지인 1, 2까지만 하나의 배열로 만든다. 
console.log(numbers2);

// splice: 1. index에서 count개를 삭제하고 삭제된 요소를 배열에 담아 반환 
console.log("=== splice(index, count) ===");

console.log(fruits);
var fruits2 = fruits.splice(0, 2);
console.log(fruits2, fruits);

// splice: 2. index에서 count개를 삭제하고 replace 대체한 후, 삭제된 요소를 배열에 담아 반환
console.log("=== splice(index, count, replace) ===");

var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 3, 10);
console.log(a2, a1);

// splice: 3. removeAt() 처럼 동작
console.log("=== removeAt() ===");

var a3 = [0, 1, 2, 3, 4];
a3.splice(2, 1) //like removeAt()
console.log(a3);

// splice: 4. insertAt() 처럼 동작
console.log("=== insertAt() ===");

var a4 = [0, 1, 3, 4, 5];
a4.splice(2, 0 ,2); // insertAt(2, 2)
console.log(a4); 
