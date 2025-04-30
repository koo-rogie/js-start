"use strict";
(() => {
    console.log(Math.min(10, 100)); // 10
    console.log(Math.min(200, 100, 50, 60, 80, 30)); //30
    console.log(Math.min(100, 20, 60, 50, 70)); // 20
    // 지정한 배열의 요소 중 최소값을 반환
    function smallest(nums) {
        // 🔍 방법 4: 전개 연산자(...) 사용 (가장 간결한 방식)
        return Math.min(...nums);
    }
    console.log(smallest([10, 100])); // 10
    console.log(smallest([200, 100, 50, 60, 80, 30])); //30
    console.log(smallest([100, 20, 60, 50, 70])); // 20
})();
