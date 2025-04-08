/*
new Object() - 생성자 함수로 객체 생성
*/

const foo = new Object();
foo.name = "구성연";
foo["age"] = 22;
foo.job = "개발자(이고 싶은...)";
foo["marride"] = false;

// 구성연 22 개발자... false
console.log(foo); // { name: '구성연', age: 22, job: '개발자(이고 싶은...)', marride: false }
console.log(foo.name); //구성연
console.log(foo["age"]); //22
console.log(foo.job); //개발자(이고 싶은...)
console.log(foo["marride"]); //false

console.log(typeof foo, foo); // object { name: '구성연', age: 22, job: '개발자(이고 싶은...)', marride: false }
