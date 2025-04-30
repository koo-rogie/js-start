(() => {
  /*
국어 영어 수학 점수의 총점과 평균을 출력하는 프로그램
*/

  // 원시형
  let userName: string = "차차핑";
  let kor: number = 100;
  let eng: number = 90;
  let math: number = 85;

  let sum: number = kor + eng + math;
  let avg: number = sum / 3;

  console.log("총점: " + sum);
  console.log("평균: " + avg);

  // 객채로 만들기
  const score = new Object();
  score.userName = "차차핑";
  score.kor = 100;
  score.eng = 90;
  score.math = 85;

  score.sum = kor + eng + math;
  score.avg = sum / 3;
  console.log(`${score.userName}의 총점: ${score.sum}`);
  console.log(`${score.userName}의 평균: ${score.avg}`);
})();
