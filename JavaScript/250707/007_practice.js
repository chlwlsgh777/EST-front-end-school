// orderCoffee라는 함수를 작성합니다.
// 첫 번째 인자로 커피 이름을, 두 번째 인자로 콜백 함수를 받습니다.
// 함수 실행 시 콘솔에 커피 준비 중...을 출력한 후, 콜백 함수를 실행합니다.
// 콜백 함수에 커피 이름을 인자로 전달하여 실행합니다.
function orderCoffee(coffeeName, callback) {
  console.log("커피 준비 중...");
  callback(coffeeName);
}

function makeCoffee(name) {
  console.log(`${name} 준비 완료!`);
}
orderCoffee("아아", makeCoffee);

// ✅ 재귀 함수 실습
// 반복문 없이 재귀 호출을 이용해 1부터 n까지의 합을 계산해봅니다.

// 🧠 재귀 함수 핵심 개념
// 재귀 함수는 두 가지 필수 요소가 있어야 합니다:

// 종료 조건: 재귀 호출을 멈추는 조건
// 재귀 조건: 자기 자신을 호출하는 부분

// 📌 요구사항
// sumUpTo라는 함수를 만듭니다.
// 인자로 받은 수까지 1부터 더한 값을 반환해야 합니다.
// 반복문 없이 재귀로 작성합니다.
// sumUpTo(5)를 실행했을 때, 15가 출력되도록 합니다.

// 💡 기본 구조
function sumUpTo(n) {
  // 1. 종료 조건: n이 1일 때는?
  if (n <= 0) {
    return "1 이상의 수를 입력하세요";
  }
  if (n === 1) {
    return 1;
  }
  // 2. 재귀 조건: n + (n-1까지의 합)
  return n + sumUpTo(n - 1);
}

console.log(sumUpTo(5)); // 15

// 🔍 힌트
// 종료 조건: n이 1일 때 무엇을 반환해야 할까요?
// 재귀 조건: n + sumUpTo(n-1)의 형태로 생각해보세요
// 주의사항: 0 이하의 수가 들어올 경우도 고려해보세요
// sumUpTo(1) = 1
// sumUpTo(2) = 1 + 2 = 3
// sumUpTo(3) = 1 + 2 + 3 = 6
// sumUpTo(4) = 1 + 2 + 3 + 4 = 10
// sumUpTo(5) = 1 + 2 + 3 + 4 + 5 = 15
