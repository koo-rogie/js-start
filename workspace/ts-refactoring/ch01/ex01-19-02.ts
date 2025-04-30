(() => {
  /*
switch문을 사용하여 학점을 출력하세요.
*/

  const score: number = 75;
  // score가 90 이상 100 이하이면 "A", 80 이상 90 미만이면 "B", 70 이상 80 미만이면 "C", 60 이상 70 미만이면 "D" ,60 미만이면 "F"  출력

  switch (score / 10) {
    case 10:
    case 9:
      console.log("A");
      break;
    case 8:
      console.log("B");
      break;
    case 7:
      console.log("C");
      break;
    case 6:
      console.log("D");
      break;
    default:
      console.log("F");
  }
})();
