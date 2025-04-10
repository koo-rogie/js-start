/*
제목: 별 찍기 - 2
설명: 별을 찍는 문제 2
제출: https://www.acmicpc.net/submit/2439

문제
첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.

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
 *   k  0 1 2 3 4         k 0 1 2 3
 * i=0  _ _ _ _ *       i=0 _ _ _ *
 * i=1  _ _ _ * *       i=1 _ _ * *
 * i=2  _ _ * * *       i=2 _ * * *
 * i=3  _ * * * *       i=3 * * * *
 * i=4  * * * * *
 * *의 해당하는 값들은 i+k >= 4(lines-1) 의 형태임을 알 수 있음
 * k >= lines - 1 -i
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
  for (let i = 1; i <= data; i++) {
    let space = " ".repeat(data - i);
    let stars = "*".repeat(i);
    console.log(space + stars);
  }
}
main();
