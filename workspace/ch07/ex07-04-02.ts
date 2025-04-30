// 내장 객체 - Math

(() => {
  // FIXME 주사위를 던져서 1부터 6까지의 숫자 중 하나를 랜덤으로 반환하는 함수
  function rollDice(): number {
    return Math.floor(Math.random() * 6) + 1;
    // return Math.ceil(Math.random() * 6);
  }

  console.log(rollDice()); // 1부터 6까지의 숫자 중 하나 출력
  console.log(rollDice()); // 1부터 6까지의 숫자 중 하나 출력
  console.log(rollDice()); // 1부터 6까지의 숫자 중 하나 출력

  // 로또 번호를 생성하는 함수
  function generateLottoNumbers(): number[] {
    const numbers: number[] = [];
    while (numbers.length < 6) {
      const num = Math.floor(Math.random() * 45) + 1;
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
    return numbers.sort((a, b) => a - b);
  }

  console.log(generateLottoNumbers()); // 로또 번호 출력
})();
