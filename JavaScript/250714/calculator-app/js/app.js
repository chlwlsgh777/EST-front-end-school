// TODO2-1: 기본 계산 함수들을 import 하세요
import { add, subtract, multiply, divide } from "./calculator/basic.js";
import { userState, changeUserState } from "./user/userManager.js";
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultText = document.getElementById("result");
const upgradeBtn = document.getElementById("upgrade-btn");

// TODO2-2: 기본 계산기 이벤트 리스너를 추가하세요
document.getElementById("add").addEventListener("click", () => {
  calculator("add");
});

document.getElementById("subtract").addEventListener("click", () => {
  calculator("subtract");
});

document.getElementById("multiply").addEventListener("click", () => {
  calculator("multiply");
});

document.getElementById("divide").addEventListener("click", () => {
  calculator("divide");
});

// TODO2-3: 계산기 실행 함수를 완성하세요
function calculator(operation) {
  try {
    // [입력값]
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    // 입력값에 대한 유효성 검사를 작성하세요
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("숫자만 가능");
    }
    // [계산 결과]
    let result;
    // 계산 결과 유효성 검사를 작성하세요
    // 결과를 화면에 표시하세요
    switch (operation) {
      case "add":
        result = add(num1, num2);
        break;
      case "subtract":
        result = subtract(num1, num2);
        break;
      case "multiply":
        result = multiply(num1, num2);
        break;
      case "divide":
        result = divide(num1, num2);
        break;
    }
    const operatorMap = {
      add: "+",
      subtract: "-",
      multiply: "x",
      divide: "/",
    };
    const operatorSymbol = operatorMap[operation];

    const expression = `${num1} ${operatorSymbol} ${num2}`;

    resultText.textContent = `결과: ${expression} = ${result}`;
    saveHistory(expression, result);
    renderHistory();
  } catch (error) {
    // 에러 메시지를 콘솔 및 화면에 출력하세요
    console.log(error.message);
    resultText.textContent = `오류: ${error.message}`;
  }
}

// ========== Advanced Calculator 기능 ==========

// TODO5-1: 업그레이드 버튼 이벤트 리스너를 추가하세요
upgradeBtn.addEventListener("click", async () => {
  // TODO5-2: 사용자 상태를 변경하세요
  changeUserState(true);
  // TODO5-3: userState를 확인하여 고급 기능을 활성화하세요
  if (userState) {
    try {
      // 동적 import로 advance.js 모듈을 로드하세요
      const { power, squareRoot } = await import("./calculator/advance.js");
      // 고급 계산기 이벤트 리스너를 추가하세요
      document.getElementById("power").addEventListener("click", () => {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        resultText.textContent = `결과: ${power(num1, num2)}`;
      });

      document.getElementById("squareRoot").addEventListener("click", () => {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        resultText.textContent = `결과: ${squareRoot(num1, num2)}`;
      });

      // UI를 변경하여 고급 계산기를 표시하고, 고급 기능이 활성화 메시지를 화면에 출력하세요
      document.getElementById("advance-calculator").style.display = "block";
    } catch (error) {
      // 에러 메시지를 콘솔 및 화면에 출력하세요
      console.error(error);
      resultText.textContent = `에러:${error.message}`;
    }
  } else {
    // 권한이 없는 경우 "고급 계산기 사용 권한이 없습니다." 메시지를 화면에 출력해주세요.
    resultText.textContent = `사용 권한 없음`;
  }
});

function saveHistory(expression, result) {
  const history = JSON.parse(localStorage.getItem("calc-history")) || [];
  history.push({ expression, result });
  localStorage.setItem("calc-history", JSON.stringify(history));
}

function renderHistory() {
  const history = JSON.parse(localStorage.getItem("calc-history")) || [];
  const historyList = document.getElementById("history-list");
  historyList.innerHTML = ""; // 초기화
  history.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.expression} = ${item.result}`;
    historyList.appendChild(li);
  });
}
renderHistory();
