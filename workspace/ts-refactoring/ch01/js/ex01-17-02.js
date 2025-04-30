"use strict";
(() => {
    /*
    if - else 을 사용하여 학점을 출력하세요.
    */
    const score = 75;
    // score가 90 이상 100 이하이면 "A", 80 이상 90 미만이면 "B", 70 이상 80 미만이면 "C", 60 이상 70 미만이면 "D" ,60 미만이면 "F"  출력
    if (score >= 90) {
        console.log("A");
    }
    else {
        if (score >= 80) {
            console.log("B");
        }
        else {
            if (score >= 70) {
                console.log("C");
            }
            else {
                if (score >= 60) {
                    console.log("D");
                }
                else {
                    if (score > 60) {
                        console.log("F");
                    }
                }
            }
        }
    }
})();
