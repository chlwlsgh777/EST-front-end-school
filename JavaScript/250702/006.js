const students = [
  { name: "Ghost", score: 85 },
  { name: "Camel", score: 92 },
  { name: "Mui", score: 78 },
];

// students data type -> array

console.log(typeof students);
console.log(Array.isArray(students)); //array인지 확인하는 정적 메서드

students.push({ name: "Shoopa", score: 20 });
console.log(students);

const arr = [30, 40, 50, 60];
// filter를 이용해서 50점 이상인 값만 배열로 출력
const over50 = arr.filter((x) => x >= 50);
console.log(over50);

//students 중에 score가 80점 이상인 요소를 배열로 추출
const over80 = students.filter((x) => x.score >= 80);
const over80StName = over80.map((x) => x.name);
console.log(over80);
console.log(over80StName);

const numbers = [11, 2, 23, 1, 55];
//오름차순
console.log(numbers.sort((a, b) => a - b));

//내림차순
console.log(numbers.sort((a, b) => b - a));

//students 성적순으로 정렬 (성적이 높은사람이 첫번째에 오도록 -> 내림차순)
const highScores = students.sort((a, b) => b.score - a.score);
console.log(highScores);

const alphabets = ["banana", "Banana", "apple", "Zebra"];
alphabets.sort((a, b) => a.localeCompare(b));
console.log(alphabets);

alphabets.sort((a, b) => b.localeCompare(a));
console.log(alphabets);
