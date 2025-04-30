"use strict";
// 유니언 타입(union type)
(() => {
    function logString(msg) {
        console.log(msg);
    }
    function logNumber(msg) {
        console.log(msg);
    }
    logString("hello");
    logNumber(235);
    function log(msg) {
        console.log(msg);
    }
    log(123);
    log("123");
})();
