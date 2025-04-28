// // 인터섹션 타입(intersection type)

// (()=>{
//   // FIXME 타입 에러가 발생하지 않도록 TodoRegist, TodoInfo 타입을 지정하세요.

//   // 할일 등록시 사용
//   type TodoRegist = {};

//   // 할일 조회시 사용
//   type TodoInfo = {};

//   const todo1: TodoRegist = {
//     title: "타입스크립트 공부",
//     content: "타입스크립트 수업 대비해서 미리 책 읽어보기.",
//   };
//   const todo2: TodoInfo = {
//     id: 13,
//     title: "타입스크립트 공부",
//     content: "타입스크립트 수업 대비해서 미리 책 읽어보기.",
//     done: false
//   };

//   console.log(todo1.title, todo2.content);
//   console.log(todo2.id, todo2.title, todo2.content, todo2.done);
// })();