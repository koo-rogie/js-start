// 비동기 함수
// 비동기 함수를 사용하는 함수도 비동기 함수가 됨
// ex08-06.ts 복사

(() => {
  function f1() {
    console.log("\t\t3. f1 호출됨.");
    const dalay = Math.floor(Math.random() * 1000 * 10);
    console.log(`\t\t4. ${dalay}ms 작업중...`);
    
    setTimeout(() => {
      console.log(`\t\t f1 작업완료`, dalay + "ms");
    }, dalay);

    console.log("\t\t5. f1 리턴됨.");
  }

  function test() {
    console.log("\t2. test 호출됨.");
    f1();
    f1();
    console.log("\t6. test 리턴됨");
  }

  console.log("1. 작업 시작.");
  test();
  console.log("7. 작업 종료.");
})();
