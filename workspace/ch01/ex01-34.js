/*
반환값이 있는 함수 - 토스터
*/

function toaster(time, bread) {
  return time + "초 동안 구어진 " + bread;
}
const toast1 = toaster(40, "우유식빵"); // 40초 동안 구어진 우유식빵
const toast2 = toaster(40, "호밀식빵"); // 40초 동안 구어진 호밀식빵

console.log(toast1);
console.log(toast2);
