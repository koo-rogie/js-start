const todoList = [
  {
    id: 1,
    title: "JavaScript 공부",
    done: true,
  },
  {
    id: 2,
    title: "TypeScript 공부",
    done: false,
  },
  {
    id: 3,
    title: "JavaScript 프로젝트",
    done: false,
  },
  {
    id: 4,
    title: "React 공부",
    done: false,
  },
  {
    id: 5,
    title: "Final 프로젝트",
    done: true,
  },
];

// 완료된 할일 목록
let doneList = [];
for (let i = 0; i < todoList.length; i++) {
  // 1.todoList의 각 항목을 순회한다
  // 2.done이 true인 항목만 골라낸다
  if (todoList[i].done === true) {
    // 3 그걸 doneList에 담는다
    doneList.push(todoList[i].title);
  }
}

console.log("완료된 할일 목록", doneList);
// 기대값: [
//   { id: 1, title: "JavaScript 공부", done: true },
//   { id: 5, title: "Final 프로젝트", done: true }
// ]

// 남은 할일 목록
let remainList = [];
for (let i = 0; i < todoList.length; i++) {
  // 1.todoList의 각 항목을 순회한다
  // 2.done이 false인 항목만 골라낸다
  if (todoList[i].done === false) {
    // 3 그걸 doneList에 담는다
    remainList.push(todoList[i].title);
  }
}
console.log("남은 할일 목록", remainList);
// 기대값: [
//   { id: 2, title: "TypeScript 공부", done: false },
//   { id: 3, title: "JavaScript 프로젝트", done: false },
//   { id: 4, title: "React 공부", done: false }
// ]

// 남은 할일 수
let remainCount = 0;
remainCount = remainList.length;
console.log("남은 할일 수", remainCount);
// 기대값: 3

// id=2인 할일
let todo = null;
for (let i = 0; i < todoList.length; i++) {
  if (todoList[i].id == 2) {
    todo = todoList[i].title;
  }
}
console.log("id=2인 할일", todo);
// 기대값: { id: 2, title: "TypeScript 공부", done: false }

// id=3인 할일의 index
let todoIndex = -1;
for (let i = 0; i < todoList.length; i++) {
  if (todoList[i].id == 3) {
    todoIndex = i;
  }
}
console.log("id=3인 할일의 index", todoIndex);
// 기대값: 2

// 남은 할일이 하나라도 있는가?
let hasTodo = false;
for (let i = 0; i < todoList.length; i++) {
  if (todoList[i].done === true) {
    // 3 그걸 doneList에 담는다
    hasTodo = true;
  }
}
console.log("남은 할일이 하나라도 있는가?", hasTodo);
// 기대값: true

// 할일이 모두 완료 되었는가?
let isAllDone = true;
for (let i = 0; i < todoList.length; i++) {
  if (todoList[i].done === true) {
    // 3 그걸 doneList에 담는다
    isAllDone = false;
  }
}
console.log("할일이 모두 완료 되었는가?", isAllDone);
// 기대값: false
