// 1. filter로 짝수만 추출
const arr1 = [1, 2, 3, 4, 5, 6];
console.log(arr1.filter((arr1) => arr1 % 2 === 0));

// 2. map으로 각 요소 제곱 만들기
const arr2 = [1, 2, 3, 4];
console.log(arr2.map((a) => a ** 2));

// 3. sort로 내림차순 정렬
const arr3 = [5, 2, 9, 1];
console.log(arr3.sort((a, b) => b - a));

// 4. reduce로 모든 값 합 구하기
const arr4 = [1, 2, 3, 4, 5];
console.log(arr4.reduce((a, c) => a + c, 0));

// 5. some으로 0보다 작은 값 있는지 확인
const arr5 = [3, -1, 5, 7];
console.log(arr5.some((a) => a <= 0));

// 6. every로 모두 3보다 큰지 확인
const arr6 = [4, 5, 6];
console.log(arr6.every((a) => a > 3));

// 7. forEach로 요소 출력
// names 배열의 모든 요소를 한 줄씩 출력하는 solution 함수

function solution1(names) {
  names.forEach((name) => {
    console.log(name);
  });
}
solution1(["Irangi", "Camel", "Shoopa"]);

// 8. filter와 map 조합
// 60점 이상인 점수만 2배로 만들어 새로운 배열만들기

function solution2(score) {
  return score.filter((a) => a >= 60).map((a) => a * 2);
}
console.log(solution2([50, 60, 70, 80])); // [120,140,160]

// 9. filter로 모음 제거
// a,e,i,o,u 다섯 가지 알파벳 모음을 제거한 문자열을 return
function solution3(my_string) {
  const vowels = ["a", "e", "i", "o", "u"];
  return my_string
    .split("") // 문자열 -> 문자배열
    .filter((x) => !vowels.includes(x))
    .join(""); // 문자배열 -> 문자열
}
console.log(solution3("beautiful")); //'btfl

// 10. for문을 사용해 1부터 5까지 출력
for (let i = 1; i < 6; i++) {
  console.log(i);
}

// 11. for 문으로 1~10중 3의 배수만 배열에 담아 출력
const result = [];
for (let i = 1; i < 11; i++) {
  if (i % 3 === 0) {
    result.push(i);
  }
}
console.log(result);
