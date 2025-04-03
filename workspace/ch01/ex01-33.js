/*
반환값이 있는 함수
*/

// 10+100의 결과를 출력 하는 함수 (add)
function add() {
  let n1 = 10;
  let n2 = 100;
  let result = n1 + n2;
  console.log(result);
}

// 전달받은 숫자와 100의 합계를 출력하는 함수 (add100)
function add100(num) {
  let ten = 100;
  console.log(num + ten);
}
// 전달받은 두 숫자의 합계를 출력하는 함수(sum)
function getsum(num1, num2) {
  let result = num1 + num2;
  // console.log(result);
  return result; // 위의 값이 반환됐다.
}


add();
add();

add100(10);
add100(20);

// getsum(10, 20);
// getsum(30, 40);

let returnVal = getsum(52, 100);
console.log(returnVal);