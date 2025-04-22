/*
함수 호출 방법 4 생성자 함수
*/

globalThis.name = "global"; // 브라우저면 window로 인식하고 node.js는 global로 인식함

const getPingName = function () {
  return this.name;
  // 화살표 함수를 만들면 this를 생성하지 않음
};
/*
const baro = new Object();
baro.name = "바로핑";
baro.age = 9;
baro.getName = getPingName;

const rara = {
  name: "라라핑",
  age: 8,
  getName: getPingName,
};
*/

// 객체를 생성해서 반환하는 함수(생성자)
function Ping(name, age) {
  this.name = name;
  this.age = age;
  this.getName = function () {
    return this.name;
  };
}
/*
일반 함수
// const baro = Ping("바로핑", 7);
// const rara = Ping("라라핑", 8);
// const copyPing = Ping("카피핑", 12);
*/

/**
 * new의 동작
 * 1. 빈 객체를 참조하는 this 생성
 * 2. this를 생성자 함수에 전달
 * 3. 생성자 함수가 아무것도 리턴하지 않는다면 this를 자동으로 리턴
 */
const baro = new Ping("바로핑", 7);
const rara = new Ping("라라핑", 8);
const copyPing = new Ping("카피핑", 12);

baro.age++;
rara.age++;

baro.height = "130";
rara.height = "125";

console.log("이 핑의 이름은:", baro.getName(), "| 나이는:", baro.age, "| 키는:", baro.height); // getName의 this는 baro
console.log("이 핑의 이름은:", rara.getName(), "| 나이는:", rara.age, "| 키는:", rara.height); // getName의 this는 rara
console.log("이 핑의 이름은:", copyPing.getName(), "| 나이는:", copyPing.age); // getName의 this는 copyPing
