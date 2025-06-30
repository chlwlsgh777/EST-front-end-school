const numbers = [51, 20, 12, 5, 2];
// 0.1 numbers의 절반값을 구하시오. // [25.5 ,10, 6, 2.5 ,1]
//map 사용

const halfNumbers = numbers.map((x) => x / 2);
console.log(halfNumbers);

// 02. numbers에서 15미만인 숫자 모두 구하기 [12,5,2]
const under15 = numbers.filter((x) => x < 15);
console.log(under15);

// 03. number에서 15보다 작은 첫번째 수
const under15First = numbers.find((x) => x < 15);
console.log(under15First);

// 04. numbers에서 전체적으로 '5'가 몇개있는지 구하시오. 3
const numbers2 = [153, 7, 55];

const splitNumbers2 = numbers2.join("");

const count = splitNumbers2.split("5").length - 1;
console.log(count);

// 05. users에서 'd'가 들어간 이름만 배열로 변환 includes, toUpperCase, toLowerCase
const users = ["Daniel", "Don", "donald", "Micheal", "Juliet"];

const includeD = users.filter((user) => user.toUpperCase().includes("D"));

console.log(includeD);

// 06. 양꼬치 10인분 먹으면 음료수 하나 서비스. 양꼬치는 1인분에 12,000원. 음료수는 2,000원.
// 정수 n 과 k가 매개변수로 주어졌을때 양꼬치 n인분과 음료수 k개를 먹었다면 얼마 지불해야하는지 return하도록 함수 완성하기

function yangKochi(n, k) {
  const food = n * 12000;
  const serviceDrink = Math.floor(n / 10);
  const paidDrink = k - serviceDrink;
  const drink = paidDrink * 2000;
  const total = food + drink;

  return total;
}

console.log(yangKochi(10, 2));
