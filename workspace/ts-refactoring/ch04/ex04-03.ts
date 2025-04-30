(() => {
function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(10, 20, 30));


let currySum = function (a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
};

currySum = (a) => (b) => (c) => a + b + c; // 실행 할 코드가 a, b, c 각각 하나이기 때문에 중괄호 생략 가능함

console.log(currySum(10)(20)(30));


})();
