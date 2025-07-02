const person = { name: "Ghost", age: 20 };

console.log(person.name);

person.height = 180;
console.log(person);

const arr = ["A", "B", "C"];
const newArr = [];
for (const x of arr) {
  newArr.push(x.toLowerCase());
}

console.log(newArr);

arr.forEach((a) => {
  newArr.push(a.toLowerCase());
});

console.log(newArr);
