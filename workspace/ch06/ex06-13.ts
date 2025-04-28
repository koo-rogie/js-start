// 인터페이스 상속

(() => {
  // 할일 등록시 사용
  interface TodoRegist {
    title: string;
    content: string;
  }

  // 할일 상세 조회시 사용
  interface TodoInfo extends TodoRegist {
    id: number; // 추가적 필요
    // title: string;
    // content: string;
    done: boolean; // 추가적 필요
  }

  const todo1: TodoRegist = {
    title: "TypeScript",
    content: "학습하기",
  };
  console.log("할일 상세 조회", todo1);

  const todo2: TodoInfo = {
    id: 1,
    title: "TS",
    content: "학습하기",
    done: false,
  };

  console.log("할일 상세 조회", todo2);
})();
