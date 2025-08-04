function Card() {
  return <div>Card</div>;
}
function App() {
  return (
    <>
      <h1>Hello, react!</h1>
      {/* 중괄호는 JS 일부 문법을 사용할 수 있음*/}
      {[1, 2, 3, 4, 5]}
      {[<Card />, <Card />, <Card />]}
      {[<span>1</span>, <span>2</span>, <span>3</span>]}
    </>
  );
}

export default App;
