/*
Array 확장(prototype 기반의 확장)
예제: List 함수 추가
*/

// 1. remove() 
Array.prototype.remove = function(index) {
    this.splice(index, 1);
}

// 2. insert()
Array.prototype.insert = function(index, value) {
    // case 2-1
    if(value instanceof Array) {
        // 해결 방법 1(for문 사용)
        // for(var i = 0; i < value.length; i++) {
        //     this.splice(index++, 0, value[i]);
        // }

        // 오류 2 
        // 콜백 함수 안의 this는 어휘 상 this와 일치하지 x -> call back안에 this 사용 조심! 
        // value.forEach(function(e) {
        //     console.log(this);
        //     this.splice(index++, 0, e);
        //     console.log(e); 
        // });

        // 해결 방법2(forEach 사용)
        // var _this = this;
        // value.forEach(function(e) {
        //     _this.splice(index++, 0, e); 
        // });

        // 해결 방법3(forEach 사용)
        //this;
        value.forEach(function(e) {
            this.splice(index++, 0, e); 
        }.bind(this)); //35번 라인의 this와 동일, this는 배열
    } else { 
        this.splice(index, 0, value);
    }
    
}

// 1. remove() - List 함수 사용 
var a = [1, 2, 4];
a.remove(2);
console.log(a);


// 2. insert() - List 함수 사용
var a = [1, 2, 4];
a.insert(2, 3);
console.log(a);

// 2-1. insert() 
a.insert(2, ['a', 'b', 'c']);
console.log(a); // [1, 2, 'a', 'b', 'c', 4];