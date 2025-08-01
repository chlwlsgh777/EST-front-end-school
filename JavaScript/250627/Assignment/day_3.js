const heights = [150, 169, 185, 170];
const ghost = 167;

// 01. heights에서 ghost보다 키가 큰사람이 몇명인지 출력하시오.
console.log(heights.filter((a) => a >= ghost).length);

const words = ["hello", "ghost", "apple", "grape", "Lemon"];
// 02. words중에서 단어 l자가 들어있는 단어만 배열로 저장하시오. ['hello','apple','Lemon']
// 조건, 대소문자 상관없이 모두 찾아야함
const newWords = words.filter((a) => a.toLowerCase().includes("l"));

console.log(newWords);
