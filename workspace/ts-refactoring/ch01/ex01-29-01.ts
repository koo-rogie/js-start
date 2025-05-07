(() => {
  /*
2차원 배열
*/

  const numbers: number[][] = [
    [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    [3, 6, 9],
    [4, 8, 12, 16],
    [5, 10, 15, 20],
    [6, 12, 18, 24],
  ];

  // 1차원 배열 출력하기 (세로 방향)
  console.log(numbers[0]); // [2, 4, 6, 8]
  console.log(numbers[1]); // [3, 6, 9, 12]
  console.log(numbers[2]); // [4, 8, 12, 16]
  console.log(numbers[3]); // [5, 10, 15, 20]

  // 2차원 배열 출력하기 (가로 방향)
  console.log("2차원 배열 0, 0은?: ", numbers[0][0]); // 2
  console.log("2차원 배열 1, 1은?: ", numbers[1][1]); // 6
  console.log("2차원 배열 2, 2은?: ", numbers[2][2]); // 12
  console.log("2차원 배열 3, 3은?: ", numbers[3][3]); // 20

  /*
합계를 구하는 명령어
*/
  let sum: number = 0;
  let lengths: number = 0;
  for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
    for (let k = 0; k < numbers[i].length; k++) {
      console.log(numbers[i][k]);
      sum += numbers[i][k];
    }
    lengths += numbers.length;
  }
  console.log("numbers의 합계는: ", sum);
  console.log("numbers의 계수는: ", lengths);

  // for of 를 사용함

  for (const row of numbers) {
    for (const num of row) {
      sum += num;
    }
  }

  console.log("총합:", sum);
})();
