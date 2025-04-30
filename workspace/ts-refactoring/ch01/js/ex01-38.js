"use strict";
(() => {
    /*
    전역 변수와 지역 변수
    */
    /**
     * 지정한 두 수의 최대값을 반환한다.
     * @param {number} n1
     * @param {number} n2
     * @returns {number} - 최대값
     */
    function max(n1, n2) {
        // TODO hoisting 단원
        // var result;
        let result;
        if (n1 > n2) {
            result = n1;
        }
        else {
            result = n2;
        }
        return result;
    }
    console.log(max(10, 20)); // 20
    console.log(max(200, 30)); // 200
})();
