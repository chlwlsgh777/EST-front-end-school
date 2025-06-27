/**
 * num -> -13 이 숫자가 10이상인지를 판별해서 '10이상이다'. '10이하이다' 출력 (조건, 절대값으로 비교)
 */

const num = -13;
let result = Math.abs(num) >= 10 ? "10이상이다." : "10이하이다."; // 코드작성
console.log(result);

//숫자를 반올림해서 짝수/홀수 구분하여 찍기

const num2 = 4.6;
result = Math.round(num2) % 2 ? "홀수" : "짝수";
console.log(result);

//난수 발생 (1~100사이 수)해서 50이상인지 미만인지 구분하여 찍기

const randomNumber = Math.floor(Math.random() * 100 + 1);
if (randomNumber >= 50) {
  console.log("50이상");
} else {
  console.log("50미만");
}

//숫자를 3제곱한 수

const num3 = 2;
// const result4 = num3 ** 3;
result = Math.pow(num3, 3);
console.log(result);

const str = "5.45"; // 숫자데이터
console.log(parseInt(str));
console.log(parseFloat(str));
console.log(parseInt("50px"));
console.log(Number("50px"));

// 숫자가 3개, 가장 큰값과 가장 작은값 구하기
const a = 3,
  b = 10,
  c = 5;
console.log(`가장 큰 수는 ${Math.max(a, b, c)}`);
console.log(`가장 작은 수는 ${Math.min(a, b, c)}`);

const arr = ["가위", "바위", "보"];
console.log(arr.length);
console.log(arr[arr.length - 1]);
console.log(arr.at(-2));

//sum이라는 함수를 만드시오 (숫자 2개를 받아서 (출입문 2개 -> 파라미터 2개) 더한 값을 출력하는 기계)
//function 함수이름 (파라미터, 파라미터,...) {실행문} -> 함수 선언식(선언적함수)

function sum(a, b) {
  return a + b;
}

result = sum(1, 2);
console.log(result);
