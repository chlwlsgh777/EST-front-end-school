//truthy, falsy

/*
 * ' ' 공백이 있는 문자열 -> true
 * '' 공백이없는 문자열 -> false
 * null -> false
 * undefinded -> false
 */

if (null) {
  console.log("true");
} else {
  console.log("false");
}

//삼항연산자 -> 조건식 ? 참일때 : 거짓일때

null ? console.log("true") : console.log("false");

if (!5 % 2) {
  console.log("even");
} else {
  console.log("odd");
}

!5 % 2 ? console.log("even") : console.log("odd");

// 90점이상 합격 / 이하 불합격 -> if..else
const score = 49;

if (score >= 90) {
  console.log("합격");
} else {
  console.log("불합격");
}

// 90점 이상 'a'/70점이상'b'/50이상'C'/50미만 'F'
if (score >= 90) {
  console.log("A");
} else if (score >= 70) {
  console.log("B");
} else if (score >= 50) {
  console.log("C");
} else {
  console.log("F");
}
