(() => {
/*
while문

*/

// 1부터 10까지 홀수 합계 출력
// 1부터 10까지 짝수 합계 출력

// 내가 한 첫번째
let sum = 0;
let i = 1;
// while (sum <= 10) {
//   if (sum % 2 == 1) {
//     sum += i;
//     i++;
//     console.log(sum);
//   } else {
//     sum += i;
//     i++;
//     console.log(sum);
//   }
// }

while (i <= 10) {
  if (i % 2 === 1) {
    sum += i;
    console.log(sum);
  } else {
    sum += i;
    console.log(sum);
  }
  i++;
}

// i = 1;
// let oddSum = 0;
// let evenSum = 0;

// while (i <= 10) {
//   if (i % 2 === 1) {
//     oddSum += i;
//   } else {
//     evenSum += i;
//   }
//   i++;
// }

// console.log("홀수 합:", oddSum); // 1 + 3 + 5 + 7 + 9 = 25
// console.log("짝수 합:", evenSum); // 2 + 4 + 6 + 8 + 10 = 30

})();
