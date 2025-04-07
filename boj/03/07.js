/*
제목: A+B - 7
설명: A+B를 조금 더 아름답게 출력하는 문제
제출: https://www.acmicpc.net/submit/11021

문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 테스트 케이스의 개수 T가 주어진다.
각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력
각 테스트 케이스마다 "Case #x: "를 출력한 다음, A+B를 출력한다. 테스트 케이스 번호는 1부터 시작한다.

예제 입력 1
5
1 1
2 3
3 4
9 8
5 2

예제 출력 1
Case #1: 2
Case #2: 5
Case #3: 7
Case #4: 17
Case #5: 7
*/

const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split("\n");

const T = parseInt(fileData[0]);

for (let i = 1; i <= T; i++) {
  const splitData = fileData[i].split(" "); //라인수
  const A = parseInt(splitData[0]);
  const B = parseInt(splitData[1]);
  console.log(`Case #${i}: ${A + B}`);
}

//-----------------------------

// const fs = require("fs");
// const fileData = fs.readFileSync(0).toString().trim().split("\n");

// let T = parseInt(fileData[0]); //라인수

// for (let i = 1; i <= T; i++) {
//   const data = fileData[i].split(" "); // i번째 줄에서 스페이스로 나누고
//   const A = parseInt(data[0]); // i줄에서 첫번째로 받는 케이스가 A
//   const B = parseInt(data[1]); // i 줄에서 두번째로 받는 케이스가 B
//   console.log(`Case #${i}: ${A + B}`); // A와 B를 더한다
// }
