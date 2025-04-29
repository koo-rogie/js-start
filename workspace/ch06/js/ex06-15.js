"use strict";
// 인터페이스 다중 상속
(() => {
    const todo1 = {
        title: "안녕하세요 구성연입니당",
        content: "저는 프론트엔드를 꿈꿉니다",
    };
    const todo2 = {
        id: 1,
        title: "안녕하세요 구성연입니당",
        done: false,
    };
    const todo3 = {
        id: 1,
        title: "안녕하세요 구성연입니당",
        content: "저는 프론트엔드를 꿈꿉니다",
        done: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    console.log(todo1);
    console.log(todo2);
    console.log(todo3);
})();
