/*
* 나머지 매개변수 (Rest parameters)
  - 정해지지 않은 수의 매개변수를 배열로 전달 받음
  - 함수의 마지막 매개변수 앞에 ... 을 붙임
* 기본값 매개변수 (Default parameters)
  - 함수 호출시 인자값을 전달하지 않으면 undefined가 되지만 이때 다른 값으로 초기화 시키고 싶을 경우 
  - 매개 변수 뒤에 "=초기값" 형태로 작성
*/

function fn(n1, n2, ...nums) {
  // console.log((n1 = 0), (n2 = 0), nums); // 이 줄은 실제로 n1, n2를 0으로 바꾸는 건 아님. 단순 출력
  if (!n1) n1 = 0; // falsy 값이면 0으로 설정 (undefined, 0, null 등)
  if (!n2) n2 = 0; // falsy 값이면 0으로 설정 (undefined, 0, null 등)
  let sum = n1 + n2;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log("합계", sum);
}

fn(); // n1, n2가 undefined → 둘 다 0으로 설정되어 합계는 0
fn(10); // n1은 10, n2는 undefined → n2가 0으로 설정되어 합계는 10
fn(20, 30);
fn(40, 50, 60);
fn(100, 120, 130, 90, 85, 111, 50, 70, 160, 200); // 총합: 1116
