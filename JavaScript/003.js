// Variables

var a = 3;
let b = 12;
const c = 15;

console.log(a, b, c);

var a = 5;
b = 5;
// let b = 5는 불가능, 값을 재할당하는건 가능
// --> 재선언 불가 (let과 const가 공통으로 가지는 속성)
// const는 재할당도 불가

//var 재선언 가능 / 재할당 가능
//let 재선언 불가 / 재할당 가능
//const 재선언 불가 / 재할당 불가
console.log(a);
console.log(b);
console.log(c);
