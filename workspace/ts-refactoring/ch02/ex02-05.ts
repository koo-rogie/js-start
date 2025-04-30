(() => {
/*
  함수 생성 1 (선언문)
*/

// 선언문 방식의 함수 선언
function add(x, y) {
  console.log(this);
  return x + y;
}

console.log(add(10, 20)); // this는 window
console.log(add.call({ name: "call" }, 60, 10)); // this는 {name: "call"}
console.log(add.apply({ name: "apply" }, [100, 10])); // this는 {name: "apply"}

})();
