/*
분류: 출력
문제: 덧셈식 출력하기
url: https://school.programmers.co.kr/learn/courses/30/lessons/181947?language=javascript

문제 설명
두 정수 a, b가 주어질 때 다음과 같은 형태의 계산식을 출력하는 코드를 작성해 보세요.
a + b = c

제한사항
1 ≤ a, b ≤ 100

입출력 예

입력 #1
4 5

출력 #1
4 + 5 = 9
*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
  console.log(Number(input[0]) + Number(input[1]));
});
