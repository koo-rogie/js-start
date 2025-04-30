"use strict";
(() => {
    /*
    * 함수 호출 방법 2 - 메서드
      - this는 메서드를 정의한 객체
      - 화살표 함수는 함수 내부에 arguments나 this가 생성되지 않고 상위 컨텍스트의 arguments, this를 사용하게 됨
    */
    // window.name = "global"; // window 브라우저가 가지고 있는 전역 객체
    // global.name = "global"; // node.js가 가지고 있는 전역 객체
    globalThis.name = "global"; // 브라우저면 window로 인식하고 node.js는 global로 인식함
    const getPingName = () => {
        // 화살표 함수로 만들면 this를 생성하지 않음
        // 상위 scope에 this를 찾음(this는 window)
        return this.name;
    };
    const baro = new Object();
    baro.name = "바로핑";
    baro.age = 9;
    baro.getName = getPingName;
    const rara = {
        name: "라라핑",
        age: 8,
        getName: getPingName,
    };
    // 함수 호출하는 방법 1 - 일반 함수로 호출(this는 window)
    console.log(getPingName());
    // 함수 호출하는 방법 2 - 메서드로 호출(this는 메서드를 정의한 객체, this는 baro )
    console.log(baro.age, baro.getName()); // getName의 this는 baro
    console.log(rara.age, rara.getName()); // getName의 this는 rara
})();
