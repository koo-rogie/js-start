/*
제목: A+B - 3
설명: A+B를 여러 번 출력하는 문제
제출: https://www.acmicpc.net/submit/10950

문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 테스트 케이스의 개수 T가 주어진다.
각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력
각 테스트 케이스마다 A+B를 출력한다.

예제 입력 1
5
1 1
2 3
3 4
9 8
5 2

예제 출력 1
2
5
7
17
7
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
  for (let i = 1; i < data.length; i++) {
    const rowArr = data[i];
    console.log(rowArr[0] + rowArr[1]);
  }
}
main();

/*
// 기존에 풀던 방식
const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split("\n");

let T = parseInt(fileData[0]); //라인수

for (let i = 1; i <= T; i++) {
  const data = fileData[i].split(" "); // i번째 줄에서 스페이스로 나누고 
  const A = parseInt(data[0]); // i줄에서 첫번째로 받는 케이스가 A
  const B = parseInt(data[1]); // i 줄에서 두번째로 받는 케이스가 B
  console.log(A + B); // A와 B를 더한다
}
*/
