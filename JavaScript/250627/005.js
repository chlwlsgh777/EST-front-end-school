/**
 * Array
 */

const fruits = ["apple", "mango", "banana"];

fruits[1] = "cherry";
console.log(fruits);

// 추가 unshift, push
fruits.unshift("watermelon");
console.log(fruits);

fruits.push("grape");
console.log(fruits);

//삭제 shift,pop
fruits.pop(); //맨 뒤 요소 하나 삭제
console.log(fruits);

fruits.shift(); //맨 앞 요소 하나 삭제
console.log(fruits);

const newFruits = fruits.slice(1, 2);
console.log(newFruits);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const newArr = arr1.concat(arr2);
console.log(newArr);

const whosBig = Math.max(...arr1);
console.log(whosBig);

const str = "Ghost, World, Sunny";
// ["Ghost","World","Sunny"] -> names 변수에 배열로 넣기

const names = str.split(",");
const newStr = names.join("❣️");
console.log(newStr);

const newStr2 = [...str];
console.log(newStr2);
console.clear();

const users = "hello world"; //w찾기 indexOf
console.log(users.indexOf("w"));

//indexOf로 cat 찾기
const animals = ["puppy", "cat", "parrot", "cat"];
console.log(animals.indexOf("cat"));
console.log(animals.lastIndexOf("cat"));
console.log(animals.includes("cat")); //Boolean값을 반환
