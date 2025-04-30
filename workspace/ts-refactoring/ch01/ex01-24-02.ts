(() => {
/*
국어 영어 수학 점수의 총점과 평균을 출력하는 프로그램
*/

const score = {
  userName: "차차핑",
  kor: 100,
  eng: 90,
  math: 85,
  sum: function () {
    // 객체 메서드가 자신의 속성을 접근할때 this를 사용한다.
    // 메서드 내부에서 this가 사용될때 this는 매서드를 가진 객채를 가리킴
    return this.kor + this.eng + this.math;
  },
  avg: function () {
    return this.sum() / 3;
  },
};

console.log(`${score.userName}의 국어 점수: ${score.kor}`);
console.log(`${score.userName}의 영어 점수: ${score.eng}`);
console.log(`${score.userName}의 수학 점수: ${score.math}`);

console.log(`${score.userName}의 총점: ${score.sum()}`);
console.log(`${score.userName}의 평균: ${score.avg()}`);

})();
