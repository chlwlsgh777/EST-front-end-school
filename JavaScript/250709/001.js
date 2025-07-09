const wenivInfo = `{
  "company": "위니브",
  "members": [
    {
      "name": "이호준",
      "nickname": "Licat",
      "job": "CEO"
    },
    {
      "name": "김유진",
      "nickname": "Binky",
      "job": "프론트엔드"
    },
    {
      "name": "전유진",
      "nickname": "Zeze",
      "job": "프론트엔드"
    },
    {
      "name": "차경림",
      "nickname": "Soulgom",
      "job": "디자인"
    }
  ]
}
`;

// 1. JSON.parse();
// => 자바스크립트 객체로 변환
const parsedInfo = JSON.parse(wenivInfo);
console.log(wenivInfo);
console.log(parsedInfo);

// 2.JSON.stringfy()
const memberInfo = {
  name: "김유진",
  nickname: "빙키",
};

const memberJson = JSON.stringify(memberInfo);
console.log(memberInfo);
console.log(memberJson);

// => 데이터를 응답받고 , 전송할 때 사용

// 3. 깊은복사 주의사항
// JSON.parse(JSON.stringfy())
const symbol = Symbol();
const originObj = {
  name: "위니브",
  founded: 2020,
  date: [1, 2, 3],
  location: {
    city: "제주",
  },
  func1: () => console.log("함수"),
  [symbol]: "심볼",
  missing: undefined,
};

const deepCopyObj = JSON.parse(JSON.stringify(originObj));
console.log(deepCopyObj);

// 사라지는 값: 심볼, 함수, undefined
// 변하는 값: Date(객체) -> 문자열, RegExp -> 빈객체, 특수한 숫자(NaN, Infinity등) -> null
// 라이브러리 lodash cloneDeep, structuredClone() 사용 권장
