/**
 * 'key' in 객체
 * 해당 key가 객체에 있는지 존재여부를 Boolean으로 출력
 */

const user = {
  name: "Ghost",
  age: 1000,
};

console.log("name" in user);
console.log("color" in user);

const arr = ["a", "b", "c"];
for (const idx in arr) {
  console.log("array : ", idx);
}

for (const key in user) {
  console.log("object : ", key);
}

const friend1 = {
  name: "Ghost",
  age: 1000,
  skills: "fly",
};

const friend2 = {
  name: "Irangi",
  age: 500,
};

// friend1,friend2에 skill값이 있는지 확인
console.log("skills" in friend1);
console.log("skills" in friend2);

// for..in -> for (변수선언 in 오브젝트) {변수값이 'key}
for (const skills in friend1) {
  console.log(skills);
}
