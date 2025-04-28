// 타입 별칭으로 객체의 타입 선언

(() => {
  type user = {
    name: string;
    age: number;
  };
  const u1: user = {
    name: "하루",
    age: 1,
  };
  const u2: user = {
    name: "나무",
    age: 5,
  };

  console.log(u1.name);
  console.log(u2.age);
})();
