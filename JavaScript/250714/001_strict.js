// "use strict"

// 1.변수 선언 강제
function func1() {
  "use strict";
  let x;
  x = 10;
  console.log(x);
}
// func1();
// console.log(window.x); => 전역 공간에 변수가 생김

// 2.삭제 불가능한 속성 삭제 시 오류
function func2() {
  "use strict";
  delete Object.prototype;
  console.log(Object.prototype);
}
// func2();

// 3. 중복 매개변수 금지
function sum(a, a) {
  //   "use strict";
  console.log(a);
}

// sum(2, 4);

// 4. this 동작 변화
function func3() {
  //   "use strict";
  console.log(this);
}
func3(); // 원래는 this가 윈도우를 가리키지만 strict모드에서는 undefined
// use strict를 쓰면 함수 내부에서 의도치않게 전역 객체를 참조하는 실수를 줄일수 있음

// 자동으로 엄격모드가 적용되는 경우 : ES6 모듈, 클래스 문법
