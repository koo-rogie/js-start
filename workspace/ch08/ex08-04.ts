// 에러 핸들링 - 직접 에러 발생(throw)

(() => {
  /**
   * 두 수를 나눈 결과를 반환
   * @param x 나누어지는 수
   * @param y 나누는 수
   * @returns 나눈 결과
   * @throws 0으로 나눌 수 없습니다.
   */
  function divide(x: number, y: number) {
    if (y === 0) {
      throw new Error("0으로 나눌 수 없습니다.");
    }
    return x / y;
  }

  function f1() {
    try {
      const result1 = divide(10, Math.round(Math.random()));
      console.log(result1);
    } catch (arr) {
      if (arr instanceof Error) {
        console.error(arr.message);
      }
    }

    const result2 = divide(10, 2);
    console.log(result2);
  }

  function f2() {
    f1();
  }

  f2();

  console.log("정상 종료");
})();
