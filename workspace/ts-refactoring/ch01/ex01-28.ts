(() => {
  /*
유사 배열 객체
*/

  // 배열 생성
  const colorArr: string[] = ["orange", "yellow", "geen"];
  colorArr.push("blue"); // 배열에 요소 추가
  /**
   * 매개 변수로 전달받은 배열의 모든 요소를 인덱스와 함께 출력한다
   * @param {[]} arr - 배열
   */

  function printArr(arr: any) {
    for (let i = 0; i < arr.length; i++) {
      console.log(`배열의 ${i}번째인 ${arr[i]}을 출력합니다`);
    }
  }
  /*
유사 배열 객체
 - length속성
 - 0부서 시작해서 1씩 증가하는 속성 추가
*/
  printArr(colorArr); // printArr 함수 호출

  const arr = {
    length: 3,
    0: "orange",
    1: "yellow",
    2: "green",
    /**
     * 배열의 맨 끝에 지정한 elem를 추가한다(이 캐이스는 유사 배열이니 주의)
     * @param {string} elem - 추가할 요소
     */
    push: function (elem: any) {
      var tmpArr = new Array();
      tmpArr.push(elem);
      tmpArr.push.call(arr, elem);
    },
  };
  arr.push("black");
  arr.push("white");
  arr.push("안녕");
  arr.push("하세용");
  printArr(arr);
  // 문자열도 유사 배열 객채의 일종
  // printArr("이것은 문자열");
})();
