/*
카운터 예제. that 변수로 외부의 this 참조
*/

var count = 0;
const myObj = {
  count: 0,
  visit: function(){
    // 방문자를 한명 증가시킨다.
    this.count++; // this = myObj
    const that = this; // that = this = myObj
    const visit2 = function(){
      that.count++; // that = myObj
    };
    visit2();
  },
};

myObj.visit(); // this = myObj
myObj.visit();
console.log('방문자수', myObj.count); // 2