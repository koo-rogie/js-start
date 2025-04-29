// 인터페이스 상속 - 계층 구조
// ex06-13.ts 복사

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

  interface TodoInfoWithDate extends TodoInfo {
    createdAt: Date;
    updatedAt: Date;
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

  const todo3: TodoInfoWithDate = {
    id: 2,
    title: "커피",
    content: "마시기",
    done: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  console.log("할일 상세 조회", todo3);
})();
