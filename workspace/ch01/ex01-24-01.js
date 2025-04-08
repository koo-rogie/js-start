/*
JSON 표기법 - 리터럴 방식으로 객체 생성
JavScript Object Notation
JSON은 자바스크립트 객체 표기법으로, 자바스크립트에서 객체를 표현하는 방법이다.
*/

const foo = {
  name: "구성연",
  age: 22,
  job: "개발자(이고 싶은...)",
  marride: false,
};

foo.email = "json@naver.com"; // 추가적으로 선언하고 싶을때 사용함

console.log(foo); // { name: '구성연', age: 22, job: '개발자(이고 싶은...)', marride: false }
