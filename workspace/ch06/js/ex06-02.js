"use strict";
// 기본 타입
(() => {
    let str = "100";
    let eag = 12;
    let doun = true;
    doun = false;
    let nullVal = null;
    let emtyVal = undefined;
    let todo = { title: "TypeScript 공부", doun: false };
    let todoList = ["JavaScript", "TypeScript"];
    let todoList2 = ["React", "Naxt.js"];
    // tuple: 길이가 고정되고 각 요소의 타임이 정의된 타입
    let items = ["안녕", 1];
    // any 타입 상관없이 대입이 됨
    let userName = "이일구";
    userName = 213;
})();
