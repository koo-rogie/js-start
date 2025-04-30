"use strict";
// 인터페이스 상속 - 계층 구조
// ex06-13.ts 복사
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
    const todo3 = {
        id: 2,
        title: "커피",
        content: "마시기",
        done: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    console.log("할일 상세 조회", todo3);
})();
