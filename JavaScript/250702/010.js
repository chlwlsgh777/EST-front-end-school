/**
 * 구조분해할당(Destricturing)
 */

const animals = ["puppy", "cat", "parret", "lion", "tiger", "duck", "panda"];
const numbers = [1, 2, 3, 4, 5];

const [a, b, ...rest] = animals;
console.log(rest);

/* animals, numbers 합친 새로운 배열을 만드세요*/
const newArray = [...animals, ...numbers];

console.log(newArray); //['puppy','cat',....1,2,3,4,5]

function calc(a, b) {
  return [a + b, a / b];
}

const array = calc(10, 2);
console.log(array);

const array2 = ["apple", "mango", "banana"];

const [fruit1, fruit2, fruit3] = array2;
//변수 - a,b,c

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

console.clear();

function calc(a, b) {
  return [a + b, a / b, a * b];
}

const [sum, div, multiply = "No multiply", diff] = calc(15, 3);
console.log(sum, div, multiply, diff);
