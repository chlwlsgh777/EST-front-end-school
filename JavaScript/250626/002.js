// 비교 연산자는 좌항과 우항의 값을 비교하여 Boolean 값을 반환한다

let a = 3;
let b = 5;

console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);
console.log(a == b);
console.log(a != b);

let c = "5";

console.log(c == b); //값만 비교
console.log(c === b); //데이터 타입까지 비교
console.log(c !== b); //데이터 타입까지 비교

console.clear();

// if 조건문
let userNumber = 7;

if (userNumber === 7) {
  console.log("당첨");
} else {
  console.log("꽝");
}

//만약 입력한 값이 짝수라면 '짝수', 홀수라면 '홀수'를 출력

let number = 5;

// const isEven = number % 2 === 0;

// if (isEven) {
//   console.log("짝수");
// } else {
//   console.log("홀수");
// }

const isEven = number % 2;
if (!isEven) {
  console.log("짝수");
} else {
  console.log("홀수");
}
