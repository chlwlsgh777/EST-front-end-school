import { user1, user2 } from "./datas/users.js";

const { name, age, skills = "No Skills" } = user1;
console.log(name, age, skills);

const { name: newName, age: newAge, skills: newSkills = "no skills" } = user2;
console.log(newName, newAge, newSkills);
