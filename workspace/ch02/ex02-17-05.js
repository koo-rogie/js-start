/*
카운터 예제
Function.prototype.bind는 this를 지정하는 기능 뿐만 아니라 커링을 구현한 함수이기 때문에 인자값도 미리 전달이 가능
*/

var count = 0;
const myObj = {
  count: 0,
  visit: function () {
    // 방문자를 한명 증가시킨다.
    this.count++; // this = myObj
    const visitN = function (n) {
      this.count += n; // this = window
    };
    visitN.call(this, 2); // count를 2명 증가
    visitN.call(this, 2); // count를 2명 증가

    const visit3 = visitN.bind(this, 3);
    visit3(); // conut를 3명 증가
    visit3(); // conut를 3명 증가
  },
};

myObj.visit(); // this = myObj
myObj.visit();
console.log("방문자수", myObj.count); // 22
