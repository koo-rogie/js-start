// 인터페이스 선언 병합
// ex06-15.ts 복사

(() => {
  // 할일 등록시 사용
  interface Todo {
    id: string;
    title: string;
    content: string;
  }
  interface Todo {
    // id: number; //동일한 속성을 지정하려면 type이 같아야한다
    title: string; // type이 같다면 동일한 속성도 상관없음
    done: boolean;
    createdAt: Date;
  }

  const todo: Todo = {
    id: "1",
    title: "할일",
    content: "했었던 일",
    done: true,
    createdAt: new Date(),
  };
  console.log(todo);
})();
