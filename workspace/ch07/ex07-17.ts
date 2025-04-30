// 내장 객체 Array - find(), findIndex()

(() => {
  const arr = [1, 3, 5, 8, 9, 3, 4, 5];

  // 첫번째 2의 배수를 찾아서 출력
  console.log(arr.find((num) => num % 2 === 0)); // 8
  // 첫번째 2의 배수를 찾아서 인덱스 출력
  console.log(arr.findIndex((num) => num % 2 === 0)); // 3
  // 2의 배수만 새로운 배열로 받아서 출력
  console.log(arr.filter((num) => num % 2 === 0)); // [8, 4]
})();
