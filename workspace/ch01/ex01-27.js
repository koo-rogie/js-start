/*
배열의 모든 요소 읽기 1 - for 루프, for...of, for...in
*/

const arr = [10, 20, 30];
console.log(arr);

// 배열의 모든 요소 출력(for)

console.log("for");
for (let i = 0; i < arr.length; i++) {
  // i= 0, i= 1, i= 2 ...
  // 배열의 모든 요소를 읽는 함수인 arr.length를 사용함
  const elem = arr[i];
  console.log(i, elem); // 0 10, 1 20, 2 30
}

// ------------------------------------------------------

// 배열 모든 요소의 합계를 출력
let sum = 0; // sum = arr[i]
let oddSum = 0; // 홀수 합계
let evenSum = 0; // 짝수 합계

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 1) {
    // 배열 모든 요소의 홀수 합계를 출력
    oddSum += arr[i]; // 홀수 합계
  } else if (arr[i] % 2 === 0) {
    // 배열 모든 요소의 짝수 합계를 출력
    evenSum += arr[i]; // 짝수 합계
  } else {
    sum += arr[i]; // sum = sum + arr[i]
  }
}

console.log("전체 합계", sum);
console.log("홀수 합계", oddSum); // 홀수 합계 출력
console.log("짝수 합계", evenSum); // 짝수 합계 출력

// -------------------------------------------------------

// for or
for (let emel of arr) {
  console.log("for of", emel);
}

// -------------------------------------------------------
// for in
for (let prop in arr) {
  console.log("for in", prop, "번 에는", arr[prop], "가 있습니다.");
}
