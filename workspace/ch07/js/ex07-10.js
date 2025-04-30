"use strict";
// 내장 객체 Array - push(), pop()
(() => {
    const fruits = ["사과", "바나나"];
    const newLength = fruits.push("오랜지");
    console.log(newLength, fruits); // 3 ['사과', '바나나', '오렌지']
    fruits.push("딸기", "포도");
    console.log(fruits); // ['사과', '바나나', '오렌지', '딸기', '포도']
    let lastFruit = fruits.pop();
    console.log(lastFruit); // 포도
    console.log(fruits); // ['사과', '바나나', '오렌지', '딸기']
    lastFruit = fruits.pop();
    console.log(lastFruit); // 딸기
    console.log(fruits); // ['사과', '바나나', '오렌지']
})();
