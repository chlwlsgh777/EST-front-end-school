const users = [
  { nickName: "Ghost", role: "superAdmin", email: "ghost@gmail.com" },
  { nickName: "shoopa", role: "user", email: "shoopa@naver.com" },
  { nickName: "Camel", role: "user", email: "camel@kakao.com" },
  { nickName: "Irangi", role: "admin", email: "irangi@gmail.com" },
  { nickName: "Mui", role: "user", email: "mui@naver.com" },
];
const posts = [
  { title: "Javascript", tags: ["JS", "ES6", "NodeJS"] },
  { title: "React", tags: ["React", "Redux", "Hooks"] },
  { title: "Vue", tags: ["Vue", "Vuex", "Vue Router"] },
];

//users에서 admin권한을 가진 사용자의 이름을 출력 / 사용자의 이름은 알파벳순으로 정렬해서 배열로 반환
// admin 권한 -> superAdmin , admin
const adminRoles = ["admin", "superAdmin"]; // includes
const adminList = users.filter((user) => adminRoles.includes(user.role));
const adminNames = adminList.map((admin) => admin.nickName);
const adminSort = adminNames.sort((a, b) => a.localeCompare(b));
console.log(adminNames);
// ["Ghost","Irangi"]

//users에서 일반유저 몇명인지 출력 => 일반유저는 총 3명
const userCount = users.filter((user) => user.role === "user").length;
console.log(`${userCount}`);

// posts에서 tag목록을 출력하시오. 최종변수 tagList에 넣어서 출력
const tagList = posts.flatMap((post) => post.tags);
console.log(tagList.join(","));
// 출력결과 -> JS,ES6,NodeJs,React,Redux,Hooks,Vue,Vuex,Vue Router
