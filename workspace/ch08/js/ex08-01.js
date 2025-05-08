"use strict";
// 에러 핸들링 - Error 객체
(() => {
    function f1() {
        const arr = new Error("에러발생");
        console.log(arr.name);
        console.log(arr.message);
        console.log(arr.stack);
        console.log(arr.cause);
    }
    function f2() {
        f1();
    }
    f2();
})();
