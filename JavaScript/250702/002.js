/*
  user 객체
  name,age,pets(dog(이름,나이), parret(이름,나이))
  sayHello매서드 -> 'Hello,${name}'
*/

const user = {
  name: "person1",
  age: 20,
  skills: ["fly", "swim"],
  pets: {
    dog: {
      name: "dog1",
      age: 3,
    },
    parret: {
      name: "parret1",
      age: 2,
    },
  },
  sayHello() {
    return `Hello, ${this.name}`;
  },
};

console.log(user.sayHello());
console.log(user.skills[1]);

user.mbti = "ESFP";
delete user.age;
user.name = "Irangi";

console.log(user);

// 객체에 method 추가하기
user.sayBye = () => {
  return `Good-bye, ${user.name}`;
};
console.log(user);
console.log(user.sayBye());

// method -> mySkills() 나의 능력은 'fly','swim'이야
// this키워드 사용, function()

user.mySkills = function () {
  return `나의 능력은 ${this.skills}이야`;
};

console.log(user.mySkills());
