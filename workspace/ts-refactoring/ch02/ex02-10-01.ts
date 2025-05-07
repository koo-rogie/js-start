(() => {
  /*
  함수 생성 4 (화살표 함수 표현식)
*/

  // 기존 함수
  let add = function (x: number, y: number): number {
    return x + y;
  };

  // 화살표 함수
  add = (x: number, y: number) => {
    return x + y;
  };
  // 화살표 함수 축약 => 실행할 코드가 단 한개면 가능
  add = (x: number, y: number) => x + y;

  // add 출력문
  console.log(add(10, 20));

  // 기존 함수
  let add10 = function (x: number): number {
    return x + 10;
  };

  // 화살표 함수
  add10 = (x: number) => {
    return x + 10;
  };

  // 화살표 함수 축약 => 실행할 코드가 단 한개면 가능
  // add10 = x => x + 20; // 매개변수가 하나일 때는 () 생략 가능
  add10 = (x: number) => x + 10;

  // add10 출력문
  console.log(add10(100));
})();
