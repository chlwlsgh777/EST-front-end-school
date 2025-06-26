//Math 객체

const num = 1234.567;
const num2 = 123.456;

console.log(Math.abs(-5));
console.log(Math.ceil(num));
console.log(Math.ceil(num2));
console.log(Math.floor(num));
console.log(Math.round(num));
console.log(Math.round(num2));
console.log(Math.trunc(num));

console.log(Math.floor(-2, 5));
console.log(Math.trunc(-2, 5));

console.log(Math.max(10, 2, 5, 4));
console.log(Math.min(10, 2, 5, 4));
console.log(Math.pow(2, 3)); //2**3

//ceil() 올림
//floor() 내림
//round() 반올림
//trunc 소수점이하 버림
//max()
//min()
//pow() 거듭제곱

console.clear();

//0~1미만 난수 출력

// 1~ 10 까지
// Math.floor(Math.random()*10+1)
// Math.ceil(Math.random()*10)

let randomNumber = Math.floor(Math.random() * 10);
// console.log(randomNumber);

// 1~3까지난수
// console.log(Math.ceil(Math.random() * 3));

//0~2까지 난수
// console.log(Math.floor(Math.random() * 3));

// rsp의 변수에 '가위','바위','보'를 배열 데이터로 넣기
const rsp = ["가위", "바위", "보"];

console.log(rsp.length);
console.log(rsp[rsp.length - 1]);
console.log(rsp.at(1));
console.log(rsp.at(-2));

console.clear();
console.log(parseInt(num)); //정수만 추출
console.log(parseFloat(num)); //실수까지 추출

console.log(Number("33.45"));
console.log(parseInt("33.45"));
console.log(parseFloat("33.45"));

/* input, change */
/* 과제, bodyChangeColor.html
셀렉트태그 이용 (색상을 여러가지 지정)*/
