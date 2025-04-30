"use strict";
(() => {
    /*
    국어 영어 수학 점수의 총점과 평균을 출력하는 프로그램
    */
    // 원시형
    let userName = "차차핑";
    let kor = 100;
    let eng = 90;
    let math = 85;
    let sum = kor + eng + math;
    let avg = sum / 3;
    console.log("총점: " + sum);
    console.log("평균: " + avg);
    // 객채로 만들기
    const score = new Object();
    score.userName = "차차핑";
    score.kor = 100;
    score.eng = 90;
    score.math = 85;
    score.sum = kor + eng + math;
    score.avg = sum / 3;
    console.log(`${score.userName}의 총점: ${score.sum}`);
    console.log(`${score.userName}의 평균: ${score.avg}`);
})();
