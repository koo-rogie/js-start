/*
카운터 예제. 화살표 함수는 this가 생성되지 않음
*/

var count = 0;
const myObj = {
  count: 0,
  visit: function(){
    // 방문자를 한명 증가시킨다.
    this.count++; // this = myObj
    const visit2 = () => {
      this.count++; // this = myObj
    };
    visit2();
  },
};

myObj.visit(); // this = myObj
myObj.visit();
console.log('방문자수', myObj.count); // 2