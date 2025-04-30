// 주요 내장 함수 - parseInt, parseFloat

(()=>{

  console.log(parseInt('100'));
  console.log(parseInt('100', 10));
  console.log(parseInt('100', 2));
  console.log(parseInt('100', 16));
  console.log(parseInt('99.876')); // 소수는 버림
  
  console.log(parseFloat('99.876'));
  
})();
