"use strict";
(() => {
    /*
    반복문 - for문
    */
    // 1부터 10까지의 모든 수의 합계를 출력
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        // 초기화, 조건식, 증감식
        sum += i;
    }
    console.log("합계: ", sum);
    // 1부터 n까지 더하면 10,000이 넘을까?
    sum = 0;
    let count = 1;
    while (sum < 10000) {
        sum += count;
        count++;
    }
    console.log(--count, sum);
    // ---------------------------------
    //  1~10까지 합계
    let i = 1;
    sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    console.log("합계(for):", sum);
    // ---------------------------------
    i = 2;
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    console.log("홀수합게: ", sum);
    for (let i = 1; i <= 10; i += 2) {
        sum += i;
    }
    console.log("짝수합게: ", sum);
})();
