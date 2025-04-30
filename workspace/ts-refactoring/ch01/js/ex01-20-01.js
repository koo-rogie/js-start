"use strict";
(() => {
    /*
  반복문 - while문
  1부터 10까지의 모든 수의 합계를 출력하라
  */
    let i = 0;
    //0 부터 10까지 출력
    while (i <= 10) {
        console.log("1부터 10까지 출력: ", i++);
    }
    // 1부터 10까지의 모든 수의 합계를 출력
    let sum = 0;
    i = 1; // 초기화
    while (i <= 10) {
        // i=1~10
        sum += i; // 실행 할 코드
        i++; // 증감식
    }
    console.log(sum);
    // while (i <= 10) {
    //   a += i;
    //   i++;
    // }
})();
