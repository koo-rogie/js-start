"use strict";
// 인터페이스 정의 - 선택적 속성, 읽기 전용 속성
(() => {
    const todo1 = {
        id: 1,
        title: "TypeScript 학습하기",
        content: "학습하기",
        done: false,
    };
    console.log(todo1);
    const todo2 = {
        id: 2,
        title: "TypeScript 학습하기",
        content: "학습하기",
    };
    console.log("변경 전", todo2);
    // todo2.id = 3; // readonly 때문에 변경 안됨 => 다만 변환하는 과정에서는 정상 작동됨, js는 readonly가 없어서
    todo2.content = "학습 끝";
    console.log("변경 후", todo2);
})();
