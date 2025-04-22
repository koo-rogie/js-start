/*
유사 배열 객체
*/

// 배열 생성
const colorArr = ["orange", "yellow", "geen"];
colorArr.push("blue"); // 배열에 요소 추가
/**
 * 매개 변수로 전달받은 배열의 모든 요소를 인덱스와 함께 출력한다
 * @param {[]} arr - 배열
 */

function printArr(arr) {
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
  push: function (elem) {
    // this를 배우기 전 push 방법
    // arr[arr.length] = elem; // 현재 lenght 위치에 요소 추가
    // arr.length++; // length 증가

    // this를 배운 후 push 방법
    // this[this.length] = elem;
    // this.length++;

    // 배열의 push 메서드 사용
    var tmpArr = new Array();
    tmpArr.push(elem);// 빈 배열에 추가를 하였기 때문에 추가적인 push가 실행되지 않음
    tmpArr.push.call(arr, elem);
    // 👉 push 메서드를 arr 객체에 강제로 실행시켜서 elem을 추가함
    // 👉 arr이 유사 배열이므로 push 메서드를 빌려와서 요소를 추가하는 방식

    // 추후 배움 /=> 배열의 모든 메서드는 배열의 생성자 함수인 Array.prototype속성에 정의 되어 있음
    /*
    Array.prototype.push(elem); 
    // ❌ push 메서드는 내부에서 this.length 등을 참조하며 동작하는데,
    // 여기서는 this가 명확하지 않기 때문에 작동하지 않음
    // => elem을 어디에 추가해야 할지 알 수 없으므로 에러 발생하거나 기대한 동작을 하지 않음
    // ✅ 반드시 call/apply 등을 통해 this를 명시적으로 지정해야 함
    // Array.prototype.push.call(this, elem);
    */
  },
};
arr.push("black");
arr.push("white");
arr.push("안녕");
arr.push("하세용");
printArr(arr);
// 문자열도 유사 배열 객채의 일종
// printArr("이것은 문자열");
