import { useState, Suspense, use } from "react";

function fetchTodo(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const todos = {
        1: { id: 1, title: "리액트 공부하기", done: false },
        2: { id: 2, title: "운동하기", done: true },
        3: { id: 3, title: "책 읽기", done: false },
      };
      resolve(todos[id]) || { id, title: "알 수 없음", done: false };
    }, 1000);
  });
}

function TodoItem({ todoPromise }) {
  // use 훅으로 Promise 처리
  const todo = use(todoPromise);

  return (
    <div>
      <p>
        <strong>할 일:</strong> {todo.title}
      </p>
      <p>
        <strong>완료 여부:</strong> {todo.done ? "완료" : "미완료"}
      </p>
    </div>
  );
}

function TodoApp() {
  const [selectedId, setSelectedId] = useState(null);
  const [todoPromise, setTodoPromise] = useState(null);

  const handleSelect = (selectedId) => {
    setSelectedId(selectedId);
    setTodoPromise(fetchTodo(selectedId));
  };

  return (
    <div>
      <h2>할 일 앱</h2>
      <button onClick={() => handleSelect(1)}>할 일 1</button>
      <button onClick={() => handleSelect(2)}>할 일 2</button>
      <button onClick={() => handleSelect(3)}>할 일 3</button>

      {todoPromise ? (
        <Suspense fallback={<div>로딩 중...</div>}>
          <TodoItem todoPromise={todoPromise} />
        </Suspense>
      ) : (
        <div>
          <p>할 일을 선택하세요.</p>
        </div>
      )}
    </div>
  );
}

export default TodoApp;
