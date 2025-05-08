"use strict";
// 비동기 함수 - 콜백 방식
// 비동기 함수를 사용하는 함수도 비동기 함수가 됨
// 비동기 함수의 작업이 완료된 후 실행할 코드가 있으면 콜백 함수 사용
// 비동기 함수의 작업 결과를 전달할 경우 콜백 함수에 인자값 전달
// 비동기 함수를 여러개 호출할 경우 결과의 순서를 보장받기 위해서는
// 콜백 함수 내부에서 다른 비동기 함수를 호출해야 함
// ex08-07-04.ts 복사
(() => {
    function f1(resolve) {
        console.log("\t\t3. f1 호출됨.");
        const dalay = Math.floor(Math.random() * 1000 * 10);
        console.log(`\t\t4. ${dalay}ms 작업중...`);
        setTimeout(() => {
            console.log(`\t\t f1 작업완료`, dalay + "ms");
            resolve(`f1 작업결과!!`);
        }, dalay);
        console.log("\t\t5. f1 리턴됨.");
    }
    function test() {
        console.log("\t2. test 호출됨.");
        f1((result) => {
            console.log(`\t 8. f1 작업이 완료된 후에 호출`, result);
            f1((result) => {
                console.log(`\t 9. f1 작업이 완료된 후에 호출`, result);
                f1((result) => {
                    console.log(`\t 10. f1 작업이 완료된 후에 호출`, result);
                    f1((result) => {
                        console.log(`\t 11. f1 작업이 완료된 후에 호출`, result);
                    });
                });
            });
        });
        console.log("\t6. test 리턴됨");
    }
    console.log("1. 작업 시작.");
    test();
    console.log("7. 작업 종료.");
})();
