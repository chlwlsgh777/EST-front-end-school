const animals = ["puppy", "cat", "parret"];
let result = animals.filter((animal, index) => index === 2);
result = animals.map((animal, index) => index);

console.log(result);

// animals의 마지막 요소로 Rabbit 추가(원본배열 변경)
// push, pop, unshift, shift
animals.push("Rabbit");
console.log(animals);

// 1~2번째에있는 요소만 가져오기 -> cat,parret -> slice
const getAnimals = animals.slice(1, 3);
console.log(getAnimals);

//const animals = [ 'puppy', 'cat', 'parret', 'Rabbit' ]
// 1번째와 2개 삭제하고 해당 위치에 Elephant가 들어감. 원본이 변경됨
animals.splice(1, 2, "Elephant");
console.log("Changed Animals : ", animals);

// 1번째요소에서 0개를 지우고 cat을 넣을거임
animals.splice(1, 0, "cat");
console.log(animals);

console.clear();
const arr = ["apple", "mango", "banana"];
arr.reverse();
console.log(arr);
