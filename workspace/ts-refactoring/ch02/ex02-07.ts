(() => {
  /*
  함수 생성 2 (표현식)
*/

  // 표현식 방식의 함수 선언(기명함수)
  const add = function sum(x: number, y: number): number {
    const result = x + y;
    return result;
  };
  
  const sum = function sum(x: number, y: number): number {
    const result = x + y;
    return result;
  };

  console.log(add(10, 20));
  console.log(sum(10, 20)); // 함수 표현식 내부의 이름 sum은 외부에서 접근할 수 없습니다.
})();
