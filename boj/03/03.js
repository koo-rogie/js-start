/*
제목: 합
설명: 1부터 N까지의 합을 구하는 문제. 물론 반복문 없이 풀 수도 있습니다.
제출: https://www.acmicpc.net/submit/8393

문제
n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.

출력
1부터 n까지 합을 출력한다.

예제 입력 1
3

예제 출력 1
6
*/

const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");

let n = parseInt(fileData[0]);
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);


// 승규님꺼 while로 푼거
// let fs = require("fs");
// let input = fs.readFileSync(0, "utf-8").trim();

// let n = parseInt(input);

// let sum = 0;

// while (n) {
//   sum += n; // 10 + 9 +...+1
//   n--;
// }
// console.log("합계: " + sum);