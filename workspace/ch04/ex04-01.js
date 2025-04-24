const topLevel = '최상위 변수';

function outer(){
  const innerVal = 'outer의 지역변수';
  console.log(topLevel); // 하위 Scope에서 접근 가능
  console.log(innerVal); // 지역변수는 선언한 함수내에서만 접근 가능

}

outer();
console.log(topLevel); // 같은 Scope 내에서 접근 가능
console.log(innerVal); // 지역변수는 선언한 함수내에서만 접근 가능

