// 리터럴 방식
const reg1 = /abc/g; // 패턴: 'abc' , 플래그: g{전역검색}
console.log(reg1.test("abc abc abc")); // true
console.log(reg1.test("abc abb abb")); // false

// 생성자 방식
const reg2 = new RegExp("abc", "g");
console.log("abc Abc ABC abc".match(reg2));

const reg3 = new RegExp("abc", "gi"); // 대소문자 구분하지 않겠다
console.log("abc Abc ABC abc".match(reg3));

// 플래그 => 혼합해서 사용할 수 있다.
// g(global) : 전역 검색
// i(ignore case): 대소문자 구분 없이 검색
// m(multiline): 여러 줄 검색

const text = `
abc
ABC
abc`;

const reg4 = /^abc/gim;
console.log(text.match(reg4)); // ['abc','Abc','ABC','abc']

// 매서드
// 1. test()
let pattern1 = /abc/g;
console.log(pattern1.test("ABC"));
console.log(pattern1.test("abc"));

// 2. exec(): 매칭 결과 상세 정보
pattern1 = /hello/g;
console.log(pattern1.exec("hello world"));
console.log(pattern1.exec("hello world hello weniv"));

/*
'hello world hello weniv'
=> 결과 반환 (상세 정보), 시작 인덱스, 마지막 인덱스
*/

// 3. match(): 일치하는 모든 결과를 배열로 반환
const text2 = "abc ABC Abc";
console.log(text2.match(/abc/gi));
console.log(text2.match(/hello/gi)); // 일치하는 값이 없으면 null

// 4. search() : 일치하는 첫번째 인덱스 반환
console.log(text2.search(/ABC/)); // 4
console.log(text2.search(/xyz/)); //일치하는 값이 없으면 -1

// 5. replace(): 일치하는 부분을 지정한 문자열로 치환
console.log("Hello World Hello Weniv".replace(/Hello/g, "🦊"));

//패턴 : 우리가 찾고자 하는 문자열 규칙
// 1. 기본 문자
const text3 = "abc ABC 가나다 1234 !@#";

// 소문자: [a-z]
console.log(text3.match(/[a-z]/g));
console.log(text3.match(/a-z/g)); // 'a-z' => null

// 대문자 : [A-Z]
console.log(text3.match(/[A-Z]/g));

// 한글: [가-힣], 한글 으절 범위
console.log(text3.match(/[가-힣]/g));

// 숫자: [0-9]
console.log(text3.match(/[0-9]/g));

// 이스케이프 패턴 => 대문자로 나타내면 반대의 의미를 가짐
let testText = `abc ABC 가나다 
1234 !@#_`;

console.log("모든 문자(.)", testText.match(/./g));

console.log("숫자(\\d)", testText.match(/\d/g));
console.log("숫자가 아닌 모든 문자(\\D)", testText.match(/\D/g));

console.log("단어 문자", testText.match(/\w/g)); // 영문자, 숫자, 밑줄(_)
console.log("단어 문자가 아닌 모든 문자", testText.match(/\W/g)); // 영문자, 숫자, 밑줄(_)

console.log("공백", testText.match(/\s/g)); // 스페이스, 탭, 줄바꿈
console.log("공백제외한 모든 문자", testText.match(/\S/g)); // 스페이스, 탭, 줄바꿈

console.log("단어 경계(\\b)", testText.match(/\b/g)); //단어-비단어 경계

console.log("단어 경계에 있지않은 모든 문자(\\B\\w)", testText.match(/\B\w/g));

// 위치 문자
let exampleText2 = "Example \nexample";

// 문자열의 시작(^)
console.log(exampleText2.match(/^E/g));
console.log(exampleText2.match(/^E/gm));

// 문자열의 끝($)
console.log(exampleText2.match(/e$/));
console.log(exampleText2.match(/e$/m));
console.log(exampleText2.match(/e$/gm));

// 수량 패턴
let repeatText = "abc aabbcc aaabbbccc aaaabbbbcccc";
// ?: 앞의 문자열이 0개이거나 1개인 경우
console.log(repeatText.match(/a?b/g)); // ab,b인 경우
// +: 앞의 문자열이 1개 이상
console.log(repeatText.match(/a+b/g)); //ab,aab,aaab,aaaab
// *:앞의 문자열이 0개 이상
console.log(repeatText.match(/a*b/g));

// OR 연산 (|)
console.log(repeatText.match(/a{2}|b{2}/g)); // a가 2번 반복되는 경우 또는 b가 두번 반복되는 경우

// ()서브 패턴: 문자열 조각 중 하나를 찾는 패턴
let message = "I lobe cat and dog";
console.log(message.match(/(cat|dog)/g)); // 문자열 조각 => 'cat' 또는 'dog가 포함된 부분 검색
console.log(message.match(/[cat|dog]/g)); // 한글자, 한음절

// 활용
// 1. 해시태그 추출하기
let post =
  "#개발 강의는 역시 #위니브! #오르미 6기 #최고 #개발자 #프론트엔드 #frontend";
let hashtagPattern = /#[가-힣\w]+/g;
let hashtags = post.match(hashtagPattern);
console.log(hashtags); // ['#개발', '#위니브', '#오르미', '#최고', '#개발자', '#프론트엔드', '#frontend']

let cleanHashtags = hashtags.map((tag) => tag.replace("#", ""));
console.log(cleanHashtags);
// 태그: 영문자, 숫자, 한글, 밑줄 => 한글 + 단어 => [가-힣\w]

// 2. 여러 개의 공백을 하나로 줄이기
let spaceText = "    Hello   World   Hello   weniv   ";
let spacePattern = /\s+/g; // 1개 이상인 공백을 검색하는 정규표현식
console.log(spaceText.match(spacePattern));
console.log(spaceText.replace(spacePattern, " ")); // Hello World Hello weniv --> 양끝 공백 존재
console.log(spaceText.replace(spacePattern, " ").trim()); // 앞뒤 공백 제거

// 3. 전화번호 포맷 검증
// 010-1234-5678 => /^\d{2,3}-\d{3-4}-\d{4}$/
const numberPattern = /^\d{2,3}-\d{3,4}-\d{4}$/;
console.log(numberPattern.test("010-1111-2222"));
console.log(numberPattern.test("02-1111-2222"));
console.log(numberPattern.test("070-1111-22222"));
console.log(numberPattern.test("0700-1111-2222"));

// 4. 이메일 형식
// 아이디@url.com
// 아이디 : 영문자, 숫자, 마침표, 밑줄, 6자 이상 [a-zA-z0-9_]{6,}
// 도메인 이름: 영문자, 밑줄,숫자, 하이픈,3자 이상 ([a-zA-Z0-9-]{2,}\.)+
// domain.co.kr

// 점: \.
// 최상위 도메인 (.kr, .com, .org, .info): [a-z]{2,4}
// /^[a-zA-z0-9_]{6,}@([a-zA-Z0-9-]{2,}\.)[a-z]{2,4}$/
const emailPattern = /^[a-zA-z0-9_]{6,}@([a-zA-Z0-9-]{2,}\.)+[a-z]{2,4}$/;
console.log(emailPattern.test("test1234@weniv.com"));
console.log(emailPattern.test("test#1234@weniv.com"));
console.log(emailPattern.test("test1234@weniv.co.kr"));
console.log(emailPattern.test("test1234@weniv-url.co.kr"));
