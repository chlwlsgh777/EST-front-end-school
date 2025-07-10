// localStorage: 브라우저 데이터를 영구적으로 저장하는 방식
// => 사용자가 직접 지우지 않는 한, 데이터는 브라우저를 껐다 켜도 그대로 남아있음.
// e.g) 로그인 여부, 로그인 방식, 다크모드 설정 등

//데이터 저장 -> 값은 문자형으로 들어감
localStorage.setItem("isLogin", false);
localStorage.setItem("color-theme", "dark");

// 데이터 저장(객체 형식) -> JSON.stringfy()를 사용한 변환 필요
const user = {
  id: 1,
  name: "유진",
};

localStorage.setItem("user", JSON.stringify(user));

// 데이터 가져오기 --> 숫자, 불리언, 객체도 문자열로 저장되기 때문에 형변환에 주의
const isLogin = localStorage.getItem("isLogin");
console.log("isLogin: ", isLogin); // 불리언값 형 변환 필요
const theme = localStorage.getItem("color-theme");
console.log("theme: ", theme);

const userStorage = localStorage.getItem("user");
console.log(JSON.parse(userStorage));

// 값 지우기(데이터 삭제)
localStorage.removeItem("user");
// localStorage.clear();

// 2. 세션 스토리지: 브라우저 세션 동안만 유지함.
// --> 브라우저 종료하면 데이터가 삭제됨. 로컬 스토리지랑 차이점은 지속성이 다르다는 것.

// 데이터 저장
sessionStorage.setItem("session", 1);
sessionStorage.setItem("user", JSON.stringify(user));

// 데이터 가져오기
console.log("session: ", sessionStorage.getItem("session"));

const userStorage2 = sessionStorage.getItem("user");
console.log(JSON.parse(userStorage2));

// 데이터 삭제
sessionStorage.removeItem("user");
// sessionStorage.clear();

// 3. 쿠키: 브라우저가 서버에 자동으로 전송하는 데이터
/*
- 문자로만 저장, 4KB 제한
- 자동 전송 -> 인증 정보에 자주 쓰임.
- HttpOnly 속성이 설정된 쿠키는 자바스크립트로 읽을수 있다 -> 보안을 위한 장치
*/
console.log(document.cookie);
