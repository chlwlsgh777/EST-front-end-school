const str = "Hello World";
console.log(str.length);

console.log(str.indexOf("l"));
console.log(str.lastIndexOf("l"));

console.log(str.toUpperCase());
console.log(str.toLowerCase());

const email = "ghost@gmail.com";
const userName = email.slice(0, 5);
console.log(userName);

// email에서 @위치 찾기
const at = email.indexOf("@");
console.log(at);

const str2 = "A.B.C";
const newStr = str2.split(".");
console.log(newStr);

//사용자메일에서 도메인만 출력하기 -> gmail.com
// 1. split으로 나누기
// 2. 도메인주소요소에 접근해서 출력하기

console.log(email.split("@")[1]);

const url1 = "http://www.ghost.com/about";
const url2 = "http://www.ghost.com/contactUs";

// 각 URL의 접근페이지명 출력하기
const slice1 = url1.split("/");
console.log(slice1[slice1.length - 1]);
const slice2 = url2.split("/");
console.log(slice2[slice2.length - 1]);

console.clear();

const str3 = "  hello   world   ";
console.log(str3.trim());
console.log(str3.trimStart());
console.log(str3.trimEnd());

const star = "*";
console.log(star.repeat(5));
console.log(str.replace("H", "W", str));

const num = "7";
const num2 = "27";

console.log(num.padStart(3, "0")); //3자리로 나타낼건데 앞이 비었으면 0으로 채우기
console.log(num2.padStart(3, "0"));

console.log(num.padEnd(5, "0")); // 5자리로 채우는데 뒤가 비었으면 0으로 채우기;
console.log(num2.padEnd(5, "0"));

//천원 단위로 금액을 입력 받았을때
const coin = "3200"; //3200000 삼백이십만원
const cost = "1000";
console.log(coin.padEnd(7, "0"));

//coin 입력, cost 뺀 나머지 금액만 지원받을 수 있을때에 최종 지원금액은 얼마인가요?
const supportCash = (Number(coin) - Number(cost)) * 1000;
console.log(`${supportCash}를 지원받을수있습니다.`);
