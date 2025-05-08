// 비동기 함수 - Promise 사용
// 비동기 함수를 사용하는 함수도 비동기 함수가 됨
// 비동기 함수의 작업이 완료된 후 실행할 코드가 있으면 Promise 사용
// 에러 처리 추가
// 체인 방식으로 호출
// ex08-08-02.ts 복사

(() => {
  function f1() {
    return new Promise<string>((resolve, reject) => {
      const delay = Math.floor(Math.random() * 1000 * 1);
      console.log(`\t\t${delay}ms동안 작업중...`);

      setTimeout(() => {
        if (delay < 500) {
          resolve("f1 작업결과" + delay);
        } else {
          reject("f1 작업 실패 사유." + delay);
        }
      }, delay);
    });
  }

  function test() {
    // 비동기
    // f1()
    //   .then(f1)
    //   .then(f1)
    //   .then(f1)
    //   .then((result) => {
    //     console.log("1,2,3이 모두 성공한 후에 호출", result);
    //   })
    //   .catch((reason) => {
    //     console.log("셋중 하나라도 작업이 실패 했을때 호출", reason);
    //   });
    let successCount = 0;
    f1().then((result) => {
      successCount++;
      console.log("5. 1,2,3이 모두 성공한 후에 호출", result);
      if (successCount === 3) {
        console.log("3개 전체 성공");
      }
    });
    f1().then((result) => {
      successCount++;

      console.log("6. 1,2,3이 모두 성공한 후에 호출", result);
      if (successCount === 3) {
        console.log("3개 전체 성공");
      }
    });
    f1().then((result) => {
      successCount++;

      console.log("7. 1,2,3이 모두 성공한 후에 호출", result);
      if (successCount === 3) {
        console.log("3개 전체 성공");
      }
    });
  }

  console.log("1. 작업 시작.");
  test();
  console.log("7. 작업 종료.");
})();
