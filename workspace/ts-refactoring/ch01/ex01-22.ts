(() => {
  /*
반복문 - break, continue
*/

  // n ~ m까지의 정수중에서 가장 작은 첫번째 짝수를 찾아서 출력하세요

  const n: number = 1;
  const m: number = 10;

  for (let i: number = n; i <= m; i++) {
    if (i % 2 === 0) {
      console.log(`첫 번째 짝수: ${i}`);
      continue; // 레이블이 지정된 루프의 현재 반복에서 명령문의 실행을 종료하고 반복문의 처음으로 돌아가여 루프문의 다음 코드를 실행합니다.
      // break; / => 반복문이 몇개이든 상간없이 코드 멈추기
    }
  }
})();
