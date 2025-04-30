(() => {
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

// Score 생성자 함수 정의
const Score = function (kor, eng) {
  this.kor = kor; // 국어 점수를 인스턴스 속성으로 저장
  this.eng = eng; // 영어 점수를 인스턴스 속성으로 저장

  // sum 메서드를 인스턴스마다 별도로 정의 (화살표 함수 사용)
  this.sum = () => {
    return kor + eng; // this.kor, this.eng 대신 지역 변수 kor, eng 사용
  };

  // 아래 avg는 주석 처리됨. 인스턴스마다 정의할 수도 있으나, prototype 방식이 더 효율적
  // this.avg = () => {
  //   return this.sum() / 2;
  // };
};

// avg 메서드를 prototype에 정의 → 모든 인스턴스가 공유함
Score.prototype.avg = function () {
  return this.sum() / 2; // 생성자 내부에서 정의된 this.sum() 호출
};

const s1 = new Score(90, 80); // s1 인스턴스 생성 (sum = 170)
const s2 = new Score(70, 50); // s2 인스턴스 생성 (sum = 120)

console.log(s1.sum()); // 170, 화살표 함수 sum이 kor + eng 반환
console.log(s1.avg()); // 85, sum() 결과를 2로 나눔

console.log(s2.sum()); // 120
console.log(s2.avg()); // 60

// sum은 생성자 내부에 정의되어 인스턴스마다 다름
console.log(s1.sum === s2.sum); // false

// avg는 prototype에 정의되어 모든 인스턴스에서 공유됨
console.log(s1.avg === s2.avg); // true

// -------------------------

console.log(s1.toString()); // [object Object]
// toString()은 Object.prototype에 정의된 메서드이므로 프로토타입 체인을 따라 사용 가능

console.log(s1.hasOwnProperty("sum")); // true
// sum은 생성자 내부에서 직접 정의된 속성이므로 s1 인스턴스가 자체적으로 가지고 있음

console.log(s1.hasOwnProperty("avg")); // false
// avg는 prototype에 정의된 메서드이므로 s1의 own property는 아님 (프로토타입 체인을 통해 접근)

})();
