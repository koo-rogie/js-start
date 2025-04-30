(() => {
console.log("1. 프로그램 시작."); // 1번

function a(n1) {
  console.log("2. a 시작.", n1); // 2번
  const n2 = b(n1); // 2.5번
  console.log("7. a 종료.", n2); // => 7번..??? 왜??? 
}

function b(n3) {
  console.log("3. b 시작.", n3); // 3번
  const n4 = c(n3); // 3.5번
  console.log("6. b 종료.", n4); // 6번?? 왜???????
  return n4;
}

function c(n5) {
  console.log("4. c 시작.", n5); //4번
  const n6 = n5 + 10;
  console.log("5. c 종료.", n6); // 5번
  return n6;
}

// 매개 변수와 인자값의 개수가 달라도 에러 안남
a(10); // 1.5번

console.log("8. 프로그램 종료."); // 9번

})();
