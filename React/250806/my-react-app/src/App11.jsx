import { useState, useRef } from "react";

function App() {
  let [countOne, setCountOne] = useState(0);
  let [countTwo, setCountTwo] = useState(0);
  // 재랜더링 되어도 변수 유지가 됨
  let countThree = useRef(0);
  // 일반함수는 재랜더링 되면 변수가 초기화됨
  let countFour = 0;

  const increment1 = () => {
    setCountOne(countOne + 1);
    console.log("CountOne:", countOne);
  };

  const increment1_1 = () => {
    countOne = countOne + 1;
    console.log("CountOne:", countOne);
  };

  const increment2 = () => {
    countTwo += 1;
    console.log("CountTwo:", countTwo);
  };

  const increment3 = () => {
    countThree.current += 1;
    console.log("CountThree:", countThree.current);
  };

  const increment4 = () => {
    countFour += 1;
    console.log("CountFour:", countFour);
  };

  return (
    <div>
      <div>{countOne}</div>
      <button onClick={increment1}>useState_SetCount_Increment</button>
      <div>{countOne}</div>
      <button onClick={increment1_1}>No_SetCount_Increment</button>
      <div>{countTwo}</div>
      <button onClick={increment2}>Increment</button>
      <div>{countThree.current}</div>
      <button onClick={increment3}>Increment</button>
      <div>{countFour}</div>
      <button onClick={increment4}>Increment</button>
    </div>
  );
}

export default App;
