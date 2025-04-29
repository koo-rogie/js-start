// 객체의 타입 추론

(() => {
  // 객체가 초기화 될 때 속성값에 맞춰서 타입 추론
  const todo1 = {
    id: 12, // FIXME id의 타입을 string, number 둘 다 가능하게 하고 싶음
    title: "타입 추론",
    content: "타입스크립트가 코드를 분석해서 적절한 타입을 자동으로 지정",
  };
  // todo1.done = true;
  // todo1.id = "1";

  interface Todo {
    id: string | number;
    title: string;
    content: string;
  }

  const todo2: Todo = {
    id: "12",
    title: "할일2",
    content: "목록2",
  };
  todo1.id = 12;
})();
