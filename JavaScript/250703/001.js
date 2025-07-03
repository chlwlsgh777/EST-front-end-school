// 1. 이름과 나이를 입력받아서, 'OOO님의 나이는 OO세 입니다.' -> 함수표현식의 화살표 함수로 만드세요
const person = (name, age) => {
  return `${name}님의 나이는 ${age}세 입니다.`;
};

// 2. 더하기 함수 a+b인데 만약 b가 입력되지않았을 경우 b의 기본값은 10이 되도록 함수를 만드세요
function sum(a, b = 10) {
  return a + b;
}

// 3. 함수의 인자로 숫자 2개 받아 배열로 리턴 -> 1,2 -> return [1,2]
const arr = (a, b) => [a, b];
console.log(arr(1, 2));

// 4. 함수의 인자로 이름과 나이를 받아서 객체로 리턴 -> "Ghost",1000 -> return { name : "Ghost", age : 1000}
const person1 = (name, age) => {
  return { name: name, age: age };
};

console.log(person1("Ghost", 1000));

// 5. 연도를 입력받아서 나이를 계산하는 함수 -> getAge(1900) -> 현재 getFullYear연도를 구해서 차감
const getAge = (birthYear) => {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
};

console.log(getAge(1997));

// 6. for문으로 구구단 -> gugudan(3), gugudan(5)제한, 구구단은 2~9단까지만 지원
const gugudan = (dan) => {
  if (dan < 2 && dan > 9) {
    return "구구단은 2~9단까지만 지원합니다.";
  }

  let result = "";
  for (let i = 1; i <= 9; i++) {
    result += `${dan} * ${i} = ${dan * i}\n`;
  }
  return result;
};

console.log(gugudan(1));

// 7. 구조분해할당 -> 아래 배열을 앞의 2개만 변수로 받고, 나머지는 나머지연산자로 할당하여 받으세요
const arr7 = [10, 20, 30, 40];
const [a, b, ...rest] = arr7;
console.log(a);

// 8. 구조분해할당 -> 아래 객체중 이름과 이메일만 변수로 할당받으세요, 이때 이름은 userName으로 변경하여 받으세요
const user = { id: 1, name: "Ghost", age: 1000, email: "ghost@gamil.com" };

const { name: userName, email } = user;
console.log(email);

const users = [
  { name: "ghost", age: 1000 },
  { name: "irangi", age: 500 },
  { name: "nuvis", age: 30 },
];

// user객체를 JSON을 이용해서 문자열로 출력하시오
const stringUsers = JSON.stringify(users);
console.log(stringUsers, typeof stringUsers);

// 문자열로 바뀐 stringUsers를 다시 객체로 만들기
const objectUsers = JSON.parse(stringUsers);
console.log(objectUsers, typeof objectUsers);
