/*
class React 
*/
class Rect {
    //생성자 만들기
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }

    // draw() method   
    draw() {
        console.log(`React(w=${this.w},h=${this.h})을 그렸습니다.`);
    }
}

// test
const rect1 = new Rect(10, 20);
const rect2 = new Rect(100, 200);

rect1.draw();
rect2.draw();


/*
cf: 생성자 함수(protype 기반)
*/
const Circle = function(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}

Circle.prototype.draw = function() {
    console.log(`Circle(x=${this.x}, y=${this.y}, radius=${this.radius})을 그렸습니다.`);
}

// test
const circle = new Circle(10, 10, 10);
circle.draw();


/*
extends
*/
class Shape {
    constructor(fillColor, lineColor) {
        this.fillColor = fillColor;
        this.lineColor = lineColor;
    }

    draw() {
        console.log('구현할 수 없습니다.');
    }
}

class Rectangle extends Shape {
    constructor(w, h, fillColor, lineColor) {
        super(fillColor, lineColor); //상속의 개념을 java로부터 가져옴. 
        this.w = w;
        this.h = h;
    }

    // @Override
    draw() {
        console.log(`Rectangle(w=${this.w}, h=${this.h}, fillColor=${this.fillColor}, lineColor=${this.lineColor})을 그렸습니다.`);
    }
}

// test
const shape1 = new Rectangle(10, 20, 'red', 'blue');
shape1.draw();