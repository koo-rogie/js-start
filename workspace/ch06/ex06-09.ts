// 인터페이스로 객체의 타입 선언
// ex06-07.ts 복사

(() => {
  // 인터페이스 생성
  interface User {
    name: string;
    age: number;
  }

  const u1: User = {
    name: "하루",
    age: 1,
  };
  const u2: User = {
    name: "나무",
    age: 5,
  };

  console.log(u1.name);
  console.log(u2.age);
})();
