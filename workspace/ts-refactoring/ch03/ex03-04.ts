(() => {
/*
 * 프로토타입 체인을 이용한 상속 기능 구현
 */

/**
 * 고등학교 성적관리 생성자 함수(총점과 평균 계산)
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */
function HighSchool(kor, eng) {
  // 속성 초기 화
  this.kor = kor;
  this.eng = eng;
}

HighSchool.prototype.sum = function () {
  return this.kor + this.eng;
};

HighSchool.prototype.avg = function () {
  // 소수 첫째자리에서 반올림한다
  return Math.round(this.sum() / 2);
};

const s1 = new HighSchool(100, 91);
console.log("고등학교 총점", s1.sum());
console.log("고등학교 평균", s1.avg());

/**
 * 대학교 성적관리 생성자 함수(총점, 평균과 학점 계산)
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */
function College(kor, eng) {
  this.kor = kor;
  this.eng = eng;
}

// College가 HighSchool을 상속 받는다
College.prototype = new HighSchool();
College.prototype.constructor = College;

College.prototype.grade = function () {
  const avg = this.avg();
  if (avg >= 90) {
    return "A";
  } else if (avg >= 80) {
    return "B";
  } else if (avg >= 70) {
    return "C";
  } else if (avg >= 60) {
    return "D";
  } else {
    return "F";
  }
};

const c1 = new College(80, 91);
console.log("대학교 총점", c1.sum());
console.log("대학교 평균", c1.avg());
console.log("대학교 학점", c1.grade());

console.log(College.prototype);

})();
