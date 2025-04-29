"use strict";
// echo 함수 - 제네릭 함수
// ex06-17.ts 복사
(() => {
    // T가 아닌 아무 문자 사용 가능하지만 관례적으로  Type의 첫글자인 T를 사용
    function echo(msg) {
        return msg;
    }
    console.log(echo("hello"));
    console.log(echo(100));
    console.log(echo(true));
})();
