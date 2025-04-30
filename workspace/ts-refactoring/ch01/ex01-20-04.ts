(() => {
  /*
do-while

do {
    // 실행할 코드
    // 최소 한 번은 실행됨
} while (조건식);
*/

  let i: number = 1;
  let sum: number = 0;

  do {
    sum += i;
    i++;
  } while (i <= 10);

  console.log(sum);
})();
