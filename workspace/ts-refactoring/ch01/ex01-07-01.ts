(() => {
/*
기본 데이터 타입 - BigInt
*/

var maxNum = Number.MAX_VALUE; // number로 표현 가능한 최대값
var maxSafNum = Number.MAX_SAFE_INTEGER; // 정확한 정수의 최대 값 (9007199254740991, 약 9000조)

console.log(maxNum, maxSafNum);

console.log(
  maxSafNum - 1,
  maxSafNum,
  maxSafNum + 1,
  maxSafNum + 2,
  maxSafNum + 3
);

// BigInt
var b1 = 122345n;
var b2 = BigInt(maxSafNum);
console.log(b2 - 1n, b2, b2 + 1n, b2 + 2n, b2 + 3n);

})();
