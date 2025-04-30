"use strict";
(() => {
    /**
     * 국어, 영어, 수학 점수를 받아서 총점과 평균을 계산할 수 있는 객체를 생성
     * @param {number} kor 국어 점수
     * @param {number} eng 영어 점수
     * @param {number} math 수학 점수
     */
    const Score = function (kor, eng, math) {
        this.kor = kor;
        this.eng = eng;
        this.math = math;
        this.sum = function () {
            //TODO 클로저 단원 - 실행이 완료된 함수의 지역변수가 참조 가능한 상태고 유지되는 현상 발생
            // return kor + eng + math;
            return this.kor + this.eng + this.math;
        };
        this.avg = function () {
            return this.sum() / 3;
        };
    };
    // 바로핑은 점수가 각각 100, 90, 80이다
    const baro = new Score(100, 90, 80);
    // 라라핑은 점수가 각각 90, 80, 60이다
    const rara = new Score(90, 80, 60);
    // 두사람의 총점과 평균을 출력하세요
    console.log("총점은:", baro.sum(), "평균 점수는:", baro.avg()); // 270, 90
    console.log("총점은:", rara.sum(), "평균 점수는:", rara.avg()); // 230, 76.666..
    // 전원 수학 점수를 10점 올린 후 총점과 평균을 출력하세요
    baro.math += 10;
    rara.math += 10;
    // console.log(baro);
    // console.log(rara);
    console.log("-----------------------");
    console.log("총점은:", baro.sum(), "평균 점수는:", baro.avg()); // 280, 93.333..
    console.log("총점은:", rara.sum(), "평균 점수는:", rara.avg()); // 240, 80
})();
