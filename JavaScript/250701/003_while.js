// for...of
const fruits = ["apple", "mango", "banana"];
for (const fruit of fruits) {
  console.log(fruit);
}

fruits.forEach((fruit) => {
  console.log(fruit);
});

const str = "Hello";
console.log(str.length);

for (const spell of str) {
  console.log(spell);
}

console.clear();

// while
let i = 4;
while (i < 10) {
  console.log(i);
  i++;
}
console.log("while문 종료");

let j = 4;
do {
  console.log(j);
  j++;
} while (j < 10);

let k = 1; // 1부터 2씩 증가하는 값을 찍으세요. 1,3,5,7,9 10이상 되면 멈추기
do {
  if (k === 5) {
    k += 2;
    continue;
  }
  console.log(k);
  k += 2;
} while (k < 10);

console.clear();

k = 1;
// 위 반복문에서 5는 찍히지 않도록 continue를 이용하시오
while (k < 10) {
  if (k === 5) {
    k += 2;
    continue;
  }
  console.log(k);
  k += 2;
}
