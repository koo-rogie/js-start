/*
카운터 예제
*/

let count = 0; // 전역 변수 count (myObj와는 무관)

const myObj = {
  count: 0, // 객체 내부의 count 속성
  visit: function () {
    // visit 메서드 호출 시 방문자 수 증가
    this.count++; // 일반 함수이므로 this는 myObj를 가리킴

    const that = this; // 현재의 this(myObj)를 변수에 저장

    let visit2 = () => {
      // 화살표 함수는 자신만의 this를 가지지 않고, 외부 스코프(this)의 값을 사용함
      that.count++; // that은 myObj이므로 myObj.count를 증가시킴
    };

    visit2(); // visit2 호출
  },
};

myObj.visit(); // count: 0 → 1 → 2
myObj.visit(); // count: 2 → 3 → 4

console.log("방문자수(myObj)", myObj.count); // 기대값: 4
