// 함수표현식 1
const evenCheck = function (number) {
  return number % 2 ? "홀수" : "짝수";
};

// 함수표현식 2 -> 화살표함수 사용
const sum2 = (a, b) => {
  return a + b;
};

function getRandom(value) {
  return Math.floor(Math.random() * value + 1);
}

const getRandom1 = function (value) {
  return Math.floor(Math.random() * value) + 1;
};
const getRandom2 = (value) => {
  return Math.floor(Math.random() * value) + 1;
};
