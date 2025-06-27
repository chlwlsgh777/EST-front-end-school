const str = "123";
const num = 255;

console.log(1 + "1");
console.log(num + "");

console.log(typeof num.toString());

const arr = ["a", "b", "c"];
console.log(arr.toString()); //배열을 문자로

console.log(true.toString()); //boolean값도 문자로 변환

// object - user 변수에 mbti -> infj // bloodtType -> B
const user = {
  mbti: "infj",
};
console.log(user.toString()); //객체 타입을 문자열로 그대로 반환
console.log(JSON.stringify(user)); //JSON 객체로 객체타입데이터를 문자열로 변환할 수 있다.

console.log(num.toString(16));

// 랜덤한 RGB값을 구해서 16진수로 변환. 0~255 난수(정수)

//0~255 난수 생성함수
function getRandomHex() {
  return Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
}

function createHexValue() {
  return "#" + getRandomHex() + getRandomHex() + getRandomHex();
}

//16진수 변환후 두자리맞춤
const color1 = createHexValue();
const color2 = createHexValue();
console.log(color1, color2);

console.clear();

const num2 = 123.456789; //소수점 2자리까지만 출력하기
const newNum = num2.toFixed(2);

console.log(newNum, typeof newNum, parseFloat(newNum));
