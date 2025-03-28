/*
제목: 곱셈
설명: 빈 칸에 들어갈 수는?
제출: https://www.acmicpc.net/submit/2588

문제
(세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.

     472 ... (1)
   x 385 ... (2)
  -------
    2360 ... (3)  <- 472 × 5
   3776  ... (4)  <- 472 × 80
  1416   ... (5)  <- 472 × 300
 -------
  181720 ... (6)  <- 최종 결과

(1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.

출력
첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.

예제 입력 1
472
385

예제 출력 1
2360
3776
1416
181720
*/

const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split("\n");

const A = fileData[0];
const B = fileData[1];

console.log(A * (B % 10)); // B의 첫번째자리
console.log(A * Math.floor((B % 100) / 10)); // B의 두번째자리
console.log(A * Math.floor((B % 1000) / 100)); // B의 세번째자리
console.log(A * B); // 최종결과

/* ---------------------------------- */

const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

const a = parseInt(inputData[0]);
const b = parseInt(inputData[1]);
const c = parseInt(inputData[1][0]);
const d = parseInt(inputData[1][1]);
const e = parseInt(inputData[1][2]);

console.log(a * e);
console.log(a * d);
console.log(a * c);
console.log(a * b);
