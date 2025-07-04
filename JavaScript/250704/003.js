const cat = {
  name: "kitty",
  sound: function () {
    console.log("meow");
  },
};

const dog = {
  name: "doggy",
  sound: function () {
    console.log("woof woof");
  },
};

cat.sound();
dog.sound();

// 생성자 함수
function animals(name) {
  this.name = name;
  this.sound = function () {
    console.log(`${this.name} 소리가 납니다.`);
  };
}
const tiger = new animals("어흥");
const parret = new animals("쨱짹");
tiger.sound();
parret.sound();

// class
class animals2 {
  constructor(name) {
    this.name = name;
  }
  sound() {
    console.log(`${this.name} 소리가 납니다`);
  }
}

const lion = new animals2("King!");
lion.sound();

function Friends(name, age) {
  this.name = name;
  this.age = age;

  this.sayHello = function () {
    console.log(`Hello, ${name}`);
  };
}
const ghost = new Friends("Ghost", 1000);
ghost.sayHello();

class Friends2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello,${this.name}`);
  }

  sayAge() {
    console.log(`Your age is ${this.age}`);
  }
}

const user1 = new Friends2("Irnagi", 500);
const user2 = new Friends2("Nuvis", 30);
console.log(user1, user2);

user1.sayAge();

//class로 생성하기

class Car {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  sayName() {
    console.log(
      `이 차의 이름은 ${this.name}이고, 가격은 ${this.price}만원 입니다.`
    );
  }
}

const car1 = new Car("JEEP", 7000);
const car2 = new Car("G-Wagen", 10000);

car1.sayName(); // 이 차의 이름은 "JEEP"이고, 가격은 7000만원입니다.
