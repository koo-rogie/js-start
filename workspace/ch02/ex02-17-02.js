/*
카운터 예제
*/

let count = 0;
const myObj = {
  count: 0,
  visit: function () {
    // 방문자를 한명 증가시킨다
    this.count++;
    const that = this;
    let visit2 = function () {
      that.count++; // this는 window가 아닌 myObj를 가리킨다
    };
    visit2();
  },
};

myObj.visit();
myObj.visit();
console.log("방문자수(myObj)", myObj.count); // 기대값: 4
