"use strict";
// echo 함수 - 제네릭 타입 제약
// ex06-17-02.ts 복사
(() => {
    function echo(msg) {
        return msg;
    }
    console.log(echo("hello"));
    console.log(echo(100));
    // console.log(echo<boolean>(true));
    const str = echo("hello");
    const num = echo(123.456);
    console.log(str.toUpperCase());
    console.log(num.toFixed(2));
    function echo2(msg) {
        return msg;
    }
    const str2 = echo2("hello");
    const num2 = echo2([123, 123]);
    console.log(str2.length);
    console.log(num2.length);
})();
