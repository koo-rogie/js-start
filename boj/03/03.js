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

/**
 * 표준 입력장치(콘솔)에서 여러줄로 입력된 줄당 여러 건의 데이터를 읽어서 숫자로 변환한 후
 * 배열로 저장하여 반환한다.
 * @returns {[]} 2차원 배열
 */
function getData() {
  const fs = require("fs");
  return fs
    .readFileSync(0)
    .toString()
    .trim()
    .split("\n")
    .map((row) =>
      row.split(" ").map((val) => (isNaN(val) ? val : parseInt(val)))
    );
}

function main() {
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  const n = data[0][0];
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}
main();

/*
// 기존에 푼거
const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");

let n = parseInt(fileData[0]);
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);
*/

/*
// 승규님꺼 while로 푼거
let fs = require("fs");
let input = fs.readFileSync(0, "utf-8").trim();

let n = parseInt(input);

let sum = 0;

while (n) {
    sum += n; // 10 + 9 +...+1
    n--;
  }
  console.log("합계: " + sum);
  
*/
