"use strict";
// 비동기 함수 - Promise 사용
// 비동기 함수를 사용하는 함수도 비동기 함수가 됨
// 비동기 함수의 작업이 완료된 후 실행할 코드가 있으면 Promise 사용
// 에러 처리 추가
// 체인 방식으로 호출
// ex08-08-02.ts 복사
(() => {
    function f1() {
        return new Promise((resolve, reject) => {
            const delay = Math.floor(Math.random() * 1000 * 1);
            console.log(`\t\t${delay}ms동안 작업중...`);
            setTimeout(() => {
                if (delay < 500) {
                    resolve("f1 작업결과" + delay);
                }
                else {
                    reject("f1 작업 실패 사유." + delay);
                }
            }, delay);
        });
    }
    function test() {
        // 비동기
        f1()
            .then((result) => {
            console.log("8. 1 f1 작업이 성공", result);
        })
            .then(f1)
            .then((result) => {
            console.log("9. 2 f1 작업이 성공", result);
        })
            .then(f1)
            .then((result) => {
            console.log("10. 3 f1 작업이 성공", result);
        })
            .catch((reason) => {
            console.log("1, 2, 3번째 작업 실패 후 호출", reason);
        })
            .finally(() => {
            console.log("f1의 성공/실패와 상관 없이 항상 호출");
        });
    }
    console.log("1. 작업 시작.");
    test();
    console.log("7. 작업 종료.");
})();
