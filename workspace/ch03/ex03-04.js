/*
* 프로토타입 체인을 이용한 상속 기능 구현
*/

/**
 * 고등학교 성적관리 생성자 함수(총점과 평균 계산)
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */
function HighSchool(kor, eng){

}

const s1 = new HighSchool(100, 91);
console.log(s1.sum());
console.log(s1.avg());

/**
 * 대학교 성적관리 생성자 함수(총점, 평균과 학점 계산)
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */
function College(kor, eng){

}

const c1 = new College(80, 71);
console.log(c1.sum());
console.log(c1.avg());
console.log(c1.grade());