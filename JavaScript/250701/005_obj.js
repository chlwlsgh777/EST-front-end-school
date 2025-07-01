const obj = {
  name: "ghost",
  age: 1000,
  sayHello() {
    return `Hello, ${this.name}`;
  },
  sayBye: function () {
    return `Good bye, ${this.name}`;
  },
  getAge: () => {
    return this.age;
  },
};

console.log(obj.sayHello());
console.log(obj.sayBye());
console.log(obj.getAge());

const ghost = {
  age: 1000,
  mbti: "INFJ",
  say: function () {
    console.log("say Hello");
  },
};

console.log(ghost.age, ghost.mbti); //접근 방법, 값을 가져오는 방법
ghost.age = 500; // 수정방법

console.log(ghost);

const type = "age";
console.log(ghost[type]); // key값이 변수값으로 들어오면 [변수]

ghost.say();
