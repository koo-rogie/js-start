"use strict";
// 내장 객체 Array - slice()
(() => {
    const arr1 = ['한놈', '두식이', '석삼', '너구리', '오징어', '육개장', '칠뜨기'];
    // 인덱스 1부터 3 앞까지 복사
    let arr2 = arr1.slice();
    console.log(arr2); // ['두식이', '석삼']
    // 인덱스 2부터 2 앞까지 복사
    arr2 = arr1.slice();
    console.log(arr2); // []
    // 인덱스 5부터 끝까지 복사
    arr2 = arr1.slice();
    console.log(arr2); // ['육개장', '칠뜨기']
    // 인덱스 -2부터 끝까지 복사
    arr2 = arr1.slice();
    console.log(arr2); // ['육개장', '칠뜨기']
    console.log(arr1);
})();
