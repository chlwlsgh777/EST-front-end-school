// reduce()
// 누적된 로직을 실행한다는 뜻임, 뺸다는 의미가 아님
// (accumalator , currentValue)
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((a, c) => a + c, 0);
// a는 누적값, c(현재요소)에 a+c가 진행, 0은 생략해도 무방(초기값)

console.log(total);

const numbers2 = [10, 23, 15, 3, 2, 12, 30, 42, 50];
//홀수번째 인덱스만 더하기
const oddNums = numbers2.filter((_, b) => b % 2 === 0);
console.log(oddNums);

const addOdd = oddNums.reduce((x, y) => x + y);
console.log(addOdd);

// 1부터 10까지 [1,2,3,4,5,6,7,8,9,10]
const arr = Array(10)
  .fill(0)
  .map((_, i) => i + 1);
console.log(arr);

function sumNumbers(number) {
  const arr = Array(number)
    .fill(0)
    .map((_, i) => i + 1);

  const sum = arr.reduce((a, c) => a + c);
  console.log(sum);
}

sumNumbers(100); // 1~100까지 더한 값
sumNumbers(50); // 1~50까지 더한 값
