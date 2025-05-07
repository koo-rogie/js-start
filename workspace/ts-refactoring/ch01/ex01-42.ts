(() => {
  /*
기본값 매개변수(Default parameters)
*/

  // b가 전달되지 않을 경우에는 a만 반환되기를 의도한 코드
  function sum1(a: number, b: number): number {
    return a + b; // 하지만 이 버전은 b가 undefined여도 NaN이 되지 않고 정상 동작 (undefined + a = NaN)
  }

  // ❗️함수 선언은 호이스팅되므로, 위에 선언된 sum은 아래 선언으로 덮어씌워짐
  function sum2(a: number, b: number): number {
    if (b == undefined) {
      // == 연산자는 null과 undefined 둘 다 감지 가능
      return a; // b가 없으면 a만 반환
    } else {
      return a + b;
    }
  }

  // 동일한 기능, but === 연산자 사용
  function sum3(a: number, b: number | undefined = 0): number {
    return a + b;
  }

  // 논리 연산자를 이용한 단축 평가 초기화 방식
  function sum4(a: number, b: number): number {
    b = b || 0; // b가 falsy 값(0, null, undefined, '')일 경우 0으로 대체
    return a + b;
    // ⚠️ 하지만 이 방식은 b가 0이어도 0으로 대체됨 → 의도와 다를 수 있음
  }

  // 가장 안전하고 명확한 기본값 설정 방식 (ES6 이후 문법)
  function sum5(a: number, b = 0): number {
    return a + b;
    // b가 undefined일 때에만 0으로 초기화됨
    // null, 0은 그대로 유지됨
  }

  console.log(sum1(1, 2));
  console.log(sum2(1, 2));
  console.log(sum3(1, 2));
  console.log(sum4(1, 2));
  console.log(sum5(100));
})();
