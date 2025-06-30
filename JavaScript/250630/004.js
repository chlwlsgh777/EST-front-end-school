const arr = [1, 2, [3, 4, [5, 6]]];

console.log(arr.flat()); //기본값은 1
console.log(arr.flat(2));

console.log(arr);

const users = ["Daniel", "Amy", "donald", "Micheal", "Juliet"];
users.sort(); //정렬, 대소문자 구분함
console.log(users);

const numbers = [51, 2, 12, 1, 22, 5];
//오름차순 정렬
numbers.sort((a, b) => a - b);
console.log(numbers);
//내림차순 정렬
numbers.sort((a, b) => b - a);
console.log(numbers);

const numbers1 = [1, 2, 3, 4, 5];

//somde 은 하나라도 조건이 만족하면 true
const hasEven = numbers1.some((num) => num % 2 === 0);
console.log(hasEven);

//every는 조건이 모두 만족해야 true
const allEven = numbers1.every((num) => num % 2 === 0);
console.log(allEven);

console.clear();
//콜백함수
//reduce (reducer)
//filter ( true, false -> predicate 함수 (boolean값 반환)), some, every
// map (mapping Function)

//const users = ["Daniel", "Amy", "donald", "Micheal", "Juliet"];
// users에 "Amy"가 포함되어있는지 확인 some
console.log(users.some((user) => user === "Amy"));

// numbers에서 3보다 큰 값이 있는지 확인 some
console.log(numbers.some((number) => number > 3));

// fruits변수안에 있는 값이 모두 문자열인지 확인 every
const fruits = ["apple", "banana", 3];
console.log(fruits.every((item) => typeof item === "string"));

// 이메일 형식이 맞는지 확인 (@와 .이 있어야함) every
const emails = ["test@example.com", "hello@domain.com", "user@site.org"];
console.log(
  emails.every((check) => check.includes("@") && check.includes("."))
);

const arr2 = [3, 4];
console.log(Array.isArray(arr2));
