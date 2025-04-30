// 내장 객체 Array - forEach(), map()

(() => {
  const arr = [10, 20, 30];

  // FIXME arr의 각 요소를 제곱하여 새로운 배열을 생성하는 코드를 작성하세요.(for문)
  let newArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] ** 2);
  }

  console.log("for문", newArr);

  // FIXME arr의 각 요소를 제곱하여 새로운 배열을 생성하는 코드를 작성하세요.(forEach)
  newArr = [];
  arr.forEach((elem, i, arr) => {
    newArr.push(elem ** 2);
  });
  console.log("forEach", newArr); // [100, 400, 900]

  // FIXME arr의 각 요소를 제곱하여 새로운 배열을 생성하는 코드를 작성하세요.(map)
  newArr= arr.map((elem, i, arr) => {
    return elem ** 2;
  });
  console.log("map", newArr); // [100, 400, 900]
  
  newArr = arr.map((elem) => elem ** 2);
  console.log("map", newArr); // [100, 400, 900]
})();
