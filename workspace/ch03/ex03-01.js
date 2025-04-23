/*
* prototype
  - 모든 함수가 기본으로 가지고 있는 속성
  - 초기값은 빈 객체
  - prototype에 추가한 속성은 해당 함수가 생성자로 사용될 때 생성된 인스턴스에서 내부 링크로 참조되어 사용
  - 결국, prototype은 생성자 함수를 통해 생성되는 인스턴스의 메서드를 정의하는 역할

* Score 생성자 함수에 총점과 평균을 계산하는 메서드를 추가해서 완성하세요.
*/

/**
 * 국어, 영어 점수를 매개변수로 받는 생성자 함수
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */
const Score = function(kor, eng){

};

const s1 = new Score(90, 80);
const s2 = new Score(70, 50);

console.log(s1.sum()); // 170
console.log(s1.avg()); // 85
console.log(s2.sum()); // 120
console.log(s2.avg()); // 60