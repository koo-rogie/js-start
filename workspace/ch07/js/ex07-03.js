"use strict";
// 주요 내장 함수 - clearTimeout
// ex07-02.ts 복사
(() => {
    console.log("시작");
    const timerId = setTimeout((a, b) => {
        console.log("3초뒤에 실행됩니다", a + b, new Date());
    }, 1000 * 3, 10, 20);
    console.log("종료");
    // clearTimeout(timerId);
})();
