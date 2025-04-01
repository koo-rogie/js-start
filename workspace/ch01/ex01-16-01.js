/*
if문

if (조건식){
조건식이 참일때 실행할 코드;
조건식이 참일때 실행할 코드;
조건식이 참일때 실행할 코드;
...
}
*/

const age = 22;
if (age >= 20) {
  // age가 20 이상이면 "성인" 출력
  console.log("성인");
}
if (age < 20) {
  // age가 20 미만이면 "미성년자" 출력
  console.log("미성년자");
}

const num = 1;
if (num > 0) {
  // num이 양수이면 "양수" 출력
  console.log("양수");
}
if (num < 0) {
  // num이 음수이면 "음수" 출력
  console.log("음수");
}
if (num === 0) {
  // num이 0이면 "0" 출력
  console.log("0");
}

const password = 1235;
if (password === 1234) {
  // password가 1234면 "로그인 성공!" 출력
  console.log("로그인 성공!");
}
if (password !== 1234) {
  // password가 1234가 아니면 "로그인 실패!" 출력
  console.log("로그인 실패!");
}

const num2 = 25;
if (num2 % 2 == 0) {
  // num2가 짝수이면 "짝수" 출력
  console.log("짝수");
}
if (num2 % 2 != 0) {
  // num2가 홀수이면 "홀수" 출력
  console.log("홀수");
}

const num3 = 33;
// num3가 3의 배수이면 "3의 배수" 출력
if (num3 % 3 == 0) {
  console.log("3의 배수");
}
if (num3 % 3 != 0) {
  // num3가 3의 배수가 아니면 "3의 배수가 아님" 출력
  console.log("3의 배수가 아님");
}
