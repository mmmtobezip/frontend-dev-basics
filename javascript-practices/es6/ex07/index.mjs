// import 시키기

//mod1 unnamed export 모듈에서 Import할 땐, 반드시 이름 지정
import myFunction from './mod01.mjs';

console.log(myFunction(10, 20)); // SyntaxError: Cannot use import statement outside a module
/*
* es6 modeule system을 쓰고 싶다면 package.json -> type: "module" 명시
*/

