let a = 10;
let b = 5;
let c = 3;

// 1. a와 b 두 수를 비교해서 큰 수를 출력하세요 ('a가 큽니다.')
if (a > b) {
  console.log("a가 큽니다.");
} else {
  console.log("b가 큽니다.");
}
// 2. c가 짝수인지, 홀수인지 출력하세요 ('c는 홀수입니다.')
if (c % 2 === 0) {
  console.log("c는 짝수입니다.");
} else {
  console.log("c는 홀수입니다.");
}

// 3. b의 값에 a를 더하는 식을 쓰세요. (일반, 축약)
b = b + a;
b += a;

console.log(b);

//4. b가 a의 약수인지 확인하세요

if (a % b === 0) {
  console.log("약수");
} else {
  console.log("약수가아님");
}

// id가 일치하면 -> 'id가 존재합니다.' 출력, 일치하지않으면 '존재하지 않는 아이디 입니다.'

const userId = "Ghost";
const userPw = "1234";

const inputId = "Hello";
const inputPw = "0000";

if (userId === inputId) {
  console.log("아이디가 존재합니다");
  //password 확인
  if (userPw === inputPw) {
    console.log("login");
  } else {
    console.log("비밀번호 오류");
  }
} else {
  console.log("존재하지않는 아이디입니다.");
}

if (userId === inputId && userPw === inputPw) {
  console.log(login);
}
