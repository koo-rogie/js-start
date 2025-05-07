(() => {
  /*
연산자 우선순위
*/

  // 괄호 우선
  let result: number = 5 + 3 * 2;
  console.log(`괄호 우선: ${result}`);

  result = (5 + 3) * 2;
  console.log(`괄호 우선: ${result}`);

  // 산술 연산자 우선
  // 비교 연산자 나중
  (result as unknown as boolean) = 5 + 3 > 6 * 2;
  // result as boolean  = 5 + 3 > 6 * 2;
  console.log(`산술 연산자 우선, 비교 연산자 나중: ${result}`);

  // 논리 연산자
  (result as unknown as boolean) = 5 + 3 > 6 * 2 || 3 * 4 < 5 + 10;
  console.log(`논리 나중: ${result}`);
})();
