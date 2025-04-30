(() => {
console.log(Math.min(10, 100)); // 10
console.log(Math.min(200, 100, 50, 60, 80, 30)); //30
console.log(Math.min(100, 20, 60, 50, 70)); // 20

// 지정한 배열의 요소 중 최소값을 반환
function smallest(nums) {
  // 🔍 방법 1: apply 사용 (검색해서 작성)
  // let min = Math.min.apply(this, nums);
  // return min;

  // 🔍 방법 2: for문과 if문 사용 (기본적인 반복문 방식)
  // let min = nums[0];
  // for (let i = 1; i < nums.length; i++) {
  //   if (nums[i] < min) {
  //     min = nums[i];
  //   }
  // }
  // return min;

  // 🔍 방법 3: apply 사용 (수업 시간에 사용한 방식)
  let min = Math.min.apply(this, nums);

  // 🔍 방법 4: 전개 연산자(...) 사용 (가장 간결한 방식)
  min = Math.min(...nums);
  return min;
}

console.log(smallest([10, 100])); // 10
console.log(smallest([200, 100, 50, 60, 80, 30])); //30
console.log(smallest([100, 20, 60, 50, 70])); // 20

})();
