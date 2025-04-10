/*
제목: 별 찍기 - 1
설명: 별을 찍는 문제 1
제출: https://www.acmicpc.net/submit/2438

문제
첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

입력
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

출력
첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

예제 입력 1
5

예제 출력 1
*
**
***
****
*****
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
  for (let i = 0; i < data; i++) {
    let stars = "";
    for (let k = 0; k <= i; k++) {
      stars += "*";
    }
    console.log(stars);
  }
}
main();

/*
// 기존에 했던거
const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");

let N = fileData[0];

for (let i = 0; i < N; i++) {
  let star = "";
  for (let k = 0; k <= i; k++) {
    star += "*";
  }
  console.log(star);
}

*/
