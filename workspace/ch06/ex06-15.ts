// 인터페이스 다중 상속

(() => {
  // 할일 등록시 사용
  interface TodoRegist {
    title: string;
    content: string;
  }

  // 할일 목록 조회시 사용
  interface TodoList {
    id: number;
    title: string;
    done: boolean;
  }

  // 할일 상세 조회시 사용
  interface TodoInfo extends TodoRegist, TodoList {
    createdAt: Date;
    updatedAt: Date;
  }

  const todo1: TodoRegist = {
    title: "안녕하세요 구성연입니당",
    content: "저는 프론트엔드를 꿈꿉니다",
  };
  const todo2: TodoList = {
    id: 1,
    title: "안녕하세요 구성연입니당",
    done: false,
  };
  const todo3: TodoInfo = {
    id: 1,
    title: "안녕하세요 구성연입니당",
    content: "저는 프론트엔드를 꿈꿉니다",
    done: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  console.log(todo1);
  console.log(todo2);
  console.log(todo3);
})();
