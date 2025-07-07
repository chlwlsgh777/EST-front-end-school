// 1. 콜백함수
// setTimeout, setinterval, addEventlistener, forEach, map, filter

function callFunc(name, callback) {
  console.log(`안녕하세요, ${name}님`);
  callback(); // 콜백함수 호출
}

function sayHello() {
  console.log("반갑습니다.");
}

callFunc("우리", sayHello);

// 2. 재귀함수: 자기 자신을 다시 호출하는 함수
// 재귀조건, 종료조건이 필요하다
// 팩토리얼 계산, 피보나치 수열, 폴더탐색 등

function factorial(num) {
  console.log(num);
  // 종료 조건
  if (num === 0 || num === 1) {
    return 1;
  }

  // 재귀 조건
  return num * factorial(num - 1);
}

console.log(factorial(5));

// 3. 즉시 실행 함수  : 함수를 정의하자마자 실행하는 함수
(function () {
  console.log("이 함수는 선언과 동시에 실행됩니다.");
})();
