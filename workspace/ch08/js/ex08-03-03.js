"use strict";
// 에러 핸들링 - 에러 전달(throw)
// ex08-02.ts 복사
(() => {
    function f1() {
        const fn = new Function("x", "y", "retrun x + y");
        console.log(fn(10, 20));
    }
    function f2() {
        f1();
    }
    try {
        f2();
    }
    catch (arr) {
        // 기본적으로 catch에 전달되는 에러는 unknow이 됨
        if (arr instanceof Error) {
            console.error("에러발생", arr.message);
        }
    }
    console.log("프로그램 종료");
})();
