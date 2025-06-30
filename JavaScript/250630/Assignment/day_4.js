// every와 some을 이용해서 풀어보기

let ages = [23, 17, 15, 34, 50, 5];

// Quiz 1. 모든 성인인지 확인하기(성인판단기준 18세이상) '모두성인입니다.' 또는 '성인이 아닌사람이 있습니다' every이용

if (ages.every((age) => age >= 18)) {
  console.log("모두 성인입니다.");
} else {
  console.log("성인이 아닌사람이 있습니다.");
}

// Quiz 2. 미취학 아동이 있는지 확인하기(미취학 아동은 6세이하) '미취학아동이 있습니다', 또는 '미취학 아동이 없습니다' some이용
if (ages.some((age) => age <= 6)) {
  console.log("미취학 아동이 있습니다.");
} else {
  console.log("미취학 아동이 없습니다.");
}
const scores = [32, 85, 73, 50, 3, 93];
// Quiz 3. scores의 점수를 모두 더해서 총점을 구하세요
const totalScore = scores.reduce((a, c) => a + c, 0);
console.log(totalScore);

// Quiz 4. scores의 평균을 구하세요
const avgScore = totalScore / scores.length;
console.log(avgScore);

// Quiz 5. scores를 오름차순으로 정렬하세요 [ 3, 32, 50, 73, 85, 93 ]
const sortScore = [...scores].sort((a, b) => a - b);
console.log(sortScore);
// Quiz 6. 1부터 50까지 더하여 결과를 출력하세요(Array(n).fill().map() 이용하기)
function sumNumbers(num) {
  const arr = Array(num)
    .fill(0)
    .map((_, i) => i + 1);

  const sum = arr.reduce((a, c) => a + c, 0);
  console.log(sum);
}
sumNumbers(50);

const today = new Date();
// Quiz 7. 오늘이 주말인지 평일인지 구하여 출력하세요
let weeks = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const day = weeks[today.getDay()]; //요일 0~6, 0-> 일요일, 6->토요일

if (day === "Sunday" || day === "Saturday") {
  console.log("주말입니다.");
} else {
  console.log("평일입니다.");
}

const animals = ["puppy", "cat", "fox"];
// Quiz 8. puppy와 cat 사이에 'parret'과 'rabbit'을 추가하세요
animals.splice(1, 0, "parret", "rabbit");
console.log(animals);

// Quiz 9. animals 변수의 값을 거꾸로 출력하세요 ['fox','cat','rabbit','parret','puppy']
console.log(animals.reverse());

const str = "Hello";
// Quiz 10. str문자를 배열로 반환하시오 -> ['H','e','l','l','o]
console.log(str.split(""));

const arr = ["Today", "is", "Monday", "!"];
// Quiz 11. arr를 문자열로 만들되 사이에 공백을 넣어서 작성하세요 'Today is Monday !'
console.log(arr.join(" "));
