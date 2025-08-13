// Todo Class --> 일의 내용, 일의 상태, chageState 매서드

// TodoManager Class --> Todo를 관리하는 클래스, 할일 저장, 목록 보여주고, 남은 갯수 반환

class Todo {
  constructor(item, finished) {
    this.item = item; // 할일 내용
    this.finished = finished; // 할일 상태
  }
  changeState() {
    this.finished = !this.finished; // 할일 상태 변경
  }
}

class TodoManager {
  constructor() {
    this.todoList = [];
  }

  addItems(item) {
    this.todoList.push(item);
  }

  getItems() {
    return this.todoList;
  }

  getLeftTodoCount() {
    return this.todoList.reduce(
      (total, current) => current,
      finished === false ? total + 1 : total,
      0
    );
  }
}
