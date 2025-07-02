// Object 관련 퀴즈 20개 풀기
// 1. 객체 obj를 깊은 복사(Deep Copy)하는 코드를 작성하세요.
const obj = { a: 1, b: { c: 2 } };

const obj2 = JSON.parse(JSON.stringify(obj));
console.log(obj2);

// 2. users 배열에서 모든 사용자의 이름만 배열로 추출하세요.
const users = [
  { name: "Ghost", age: 20 },
  { name: "Irangi", age: 22 },
  { name: "Camel", age: 19 },
];

const userName = users.map((a) => a.name);
console.log(userName);

// 3. user 객체를 복사하여 age만 30으로 바꾼 새 객체를 만드세요.

const user = { name: "Ghost", age: 20 };

const copyUser = Object.assign({}, user, { age: 30 });
console.log(copyUser);

// 4. 두 객체 obj1, obj2를 합쳐서 새 객체를 만드세요.
const obj3 = { a: 1 };
const obj4 = { b: 2 };

const addObj = { ...obj3, ...obj4 };
console.log(addObj);

// 5. users 배열에서 나이가 20 이상인 사람만 추출하세요.
const users5 = [
  { name: "Ghost", age: 20 },
  { name: "Camel", age: 19 },
  { name: "Irangi", age: 22 },
];

const over20 = users5.filter((x) => x.age >= 20);
console.log(over20);

// 6. 객체 person에 height: 180 속성을 추가하세요.
const person6 = { name: "Ghost", age: 20 };
person6.height = 180;
console.log(person6);

// 7. 객체 person에서 age 속성을 삭제하세요.
const person7 = { name: "Ghost", age: 20 };
delete person7.age;
console.log(person7);

// 8. 객체 person의 모든 속성(key) 이름을 배열로 출력하세요.
const person8 = { name: "Ghost", age: 20 };
const keyPerson8 = Object.keys(person8);
console.log(keyPerson8);

// 9. 객체 person의 모든 값(value)만 배열로 출력하세요.
const person9 = { name: "Ghost", age: 20 };
const valuePerson9 = Object.values(person9);
console.log(valuePerson9);

// 10. for...in문으로 person의 모든 key와 value를 한 줄씩 출력하세요.
const person10 = { name: "Ghost", age: 20 };
for (const key in person10) {
  console.log(key);
}

// 11.person에 'age' 속성이 있는지 true/false로 출력하세요.
const person11 = { name: "Ghost", age: 20 };
console.log("age" in person11);

// 12. person 객체의 모든 값을 "이름:값" 형태의 문자열로 출력하세요.

const person12 = { name: "Ghost", age: 20 };
Object.entries(person12).forEach(([key, value]) =>
  console.log(`${key}:${value}`)
);

// 13. 빈 객체 obj를 만들고, 동적으로 key와 value를 추가하세요.
const obj13 = {};
obj13["key"] = "value";
console.log(obj13);

// 14. 객체 person의 key 개수를 출력하세요.
const person14 = { name: "Ghost", age: 20 };
const personKeyLength = Object.keys(person14).length;
console.log(personKeyLength);

// 15. 중첩 객체에서 내부 값에 접근하세요. (person.info.email)
const person15 = { name: "Ghost", info: { email: "ghost@email.com" } };
console.log(person15.info.email);

// 16. 객체의 모든 값이 숫자인지 true/false로 판별하세요.
const obj16 = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj).every((v) => typeof v === "number"));

// 17. users 배열에서 가장 나이가 많은 사람의 이름을 출력하세요.
const users17 = [
  { name: "Ghost", age: 20 },
  { name: "Camel", age: 19 },
  { name: "Irangi", age: 22 },
];
const oldest = users.reduce((a, c) => (a.age > c.age ? a : c));
console.log(oldest);

// 18. 객체 person에 sayHello 메서드를 추가하고 실행하세요.
const person18 = { name: "Ghost" };
person18.sayHello = function () {
  console.log("Hello, " + this.name);
};
person18.sayHello();

// 19. 생성자 함수로 User 객체를 만들고, 인스턴스를 생성하세요.
function User19(name, age) {
  this.name = name;
  this.age = age;
}
const u19 = new User19("Ghost", 20);
console.log(u19);

// 20. 객체 구조분해 할당으로 name, age를 변수로 추출하세요
const person20 = { name: "Ghost", age: 20 };
const { name, age } = person20;
console.log(name, age);
