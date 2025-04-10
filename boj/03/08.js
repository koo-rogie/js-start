/*
제목: A+B - 8
설명: A+B를 바로 위 문제보다 아름답게 출력하는 문제
제출: https://www.acmicpc.net/submit/11022

문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 테스트 케이스의 개수 T가 주어진다.
각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력
각 테스트 케이스마다 "Case #x: A + B = C" 형식으로 출력한다. x는 테스트 케이스 번호이고 1부터 시작하며, C는 A+B이다.

예제 입력 1
5
1 1
2 3
3 4
9 8
5 2

예제 출력 1
Case #1: 1 + 1 = 2
Case #2: 2 + 3 = 5
Case #3: 3 + 4 = 7
Case #4: 9 + 8 = 17
Case #5: 5 + 2 = 7
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

  for (let i = 1; i < data.length; i++) {
    const n1 = data[i][0];
    const n2 = data[i][1];
    const sum = n1 + n2;
    console.log(`Case #${i}: ${n1} + ${n2} = ${sum}`);
  }
}
main();

/*
// 기존에 하던 방법

const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split("\n");

const T = parseInt(fileData[0]);

for (let i = 1; i <= T; i++) {
  const splitData = fileData[i].split(" "); //라인수
  const A = parseInt(splitData[0]);
  const B = parseInt(splitData[1]);
  const C = A + B;
  console.log(`Case #${i}: ${A} + ${B} = ${C}`);
}

*/
