"use strict";
// 인터페이스 상속
(() => {
    const todo1 = {
        title: "TypeScript",
        content: "학습하기",
    };
    console.log("할일 상세 조회", todo1);
    const todo2 = {
        id: 1,
        title: "TS",
        content: "학습하기",
        done: false,
    };
    console.log("할일 상세 조회", todo2);
})();
