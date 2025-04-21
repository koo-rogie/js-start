/*
* 변수 호이스팅
  - 호이스팅 단계에서 var로 선언한 변수의 경우 선언만 되고 그 값은 undefined로 초기화 됨
  - let, const로 선언한 변수의 경우 호이스팅 단계에서 선언은 되지만 초기화가 되지 않기 때문에 
    선언 전에 접근하면 에러 발생 (undefined 값도 할당되지 않은 상태)
*/

console.log(a);
console.log(b);
console.log(c);

var a = 10;
let b = 20;
const c = 30;

console.log(a);
console.log(b);
console.log(c);
