const arrPerson = [];

const person = {
  name: "Ghost",
  age: 1000,
  mbti: "INFJ",
};

/**
 * Object.entries(obj)
 * 객체의 키, 값을 배열로 반환
 */

console.log(Object.entries(person));

const user = {
  name: "Ghost",
  age: 2000,
};

// user key, value, [key,value];

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
