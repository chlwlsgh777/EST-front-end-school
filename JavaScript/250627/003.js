// const num1 = "123";
// const num2 = 123;
// const num3 = "hello";

// //isNumber? true or false
// console.log(isNaN(num1)); // false -> 숫자
// console.log(isNaN(num2)); // false -> 숫자
// console.log(isNaN(num3)); // true -> 숫자가 아니다

const str = "I like apple pie";
// 1. apple이 들어있는지 판별
console.log(str.includes("apple"));
// 2. 4번째 인덱스에 있는 값 추출하기 charAt(4)
console.log(str.charAt(4));
// 3. 첫번째 나오는 p 인덱스 값 추출
console.log(str.indexOf("p"));
// 4. 마지막 나오는 p의 인덱스 값 추출
console.log(str.lastIndexOf("p"));
// 5. 공백을 기준으로 문자열을 나눠서 배열로 변경
console.log(str.split(" "));
// 6. slice를 이용해서 apple만 추출하기
console.log(str.slice(7, 12));
// 7. 문자열 모두 대문자로 바꾸기
console.log(str.toUpperCase());
// 8. 문자열 모두 소문자로 바꾸기
console.log(str.toLowerCase());

const str2 = "  Hello World     ";
// 9. 앞 뒤 공백을 모두 제거하기
console.log(str2.trim());
// 10. World 찾아서 'Ghost'로 바꾸기
console.log(str2.replace("World", "Ghost"));
// 11. split을 이용해서 Hello만 추출하고 3번 반복해서 출력하기
console.log(str2.trim().split(" ")[0].repeat(3));
// 12. 모든 'o' 알파벳을 찾아서 '-'로 변경하기
console.log(str2.replaceAll("o", "-"));

const num1 = "7";
// 13. 007로 표기하기 (3자리로)
console.log(num1.padStart(3, "0"));

const a = "hello";
const b = "world";
// 14. 두 문자열을 붙여서 변수 c에 저장후 출력하기
const c = a.concat(b);
console.log(c);
