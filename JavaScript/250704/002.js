// 1) 1초에 한번씩 hello 찍기

// setInterval(() => {
//   console.log(`Hello`);
// }, 1000);

// 2) 현재시각 3초에 한번씩 시간 보여주기

// setInterval(() => {
//   console.log(new Date().toLocaleString());
//   console.log(new Date().toLocaleTimeString());
//   console.log(new Date().toLocaleDateString());
// }, 3000);

// 3) 0.5초마다 카운트 증가 : 출력결과 -> count1 -> count2 -> count3

// let count = 1;
// const intervalId = setInterval(() => {
//   console.log(`count ${count}`);
//   count++;

//   // 3이되면 종료
//   if (count > 3) {
//     clearInterval(intervalId);
//   }
// }, 500);

// 4) 1초마다 배열에 있는것을 순서대로 출력

// const news = [
//   "코딩수업 마지막날",
//   "Javascript최고",
//   "그동안 즐거웠다",
//   "끝까지 버티기",
// ];
// let index = 0;

// const printNews = setInterval(() => {
//   console.log(news[index]);
//   index++;

//   if (index >= news.length) {
//     index = 0;
//   }
// }, 1000);

// 5) 1초에 한번씩 Hello가 찍히다가, 3초후에 멈추기

// const intervalId = setInterval(() => {
//   console.log(`Hello`);
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 3000);

// 1초마다 1~5까지 출력한 후에 멈추지 -> count 변수 검사
let count = 1;
const intervalId = setInterval(() => {
  console.log(`${count++}`);
  if (count > 5) {
    clearInterval(intervalId);
  }
}, 1000);
