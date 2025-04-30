"use strict";
(() => {
    /*
    함수 호출 방법 4: 생성자 함수 사용하기
    */
    globalThis.name = "global"; // 전역 객체에 name을 추가 (브라우저에서는 window.name)
    // 일반 함수 정의 (this가 호출한 객체에 따라 달라짐)
    const getPingName = function () {
        return this.name; // 이 this는 호출하는 객체에 따라 달라짐
        // 만약 화살표 함수였다면 this는 외부 스코프를 그대로 가리킴
    };
    // 객체를 생성해서 반환하는 생성자 함수 정의
    function Ping(name, age) {
        // 1. new 키워드로 호출 시, 내부에서 this = {} (빈 객체)가 먼저 생성됨
        // 2. 생성된 this 객체가 함수 내부로 전달됨
        this.name = name; // 전달받은 name 값을 this에 저장 (예: this.name = "바로핑")
        this.age = age; // 전달받은 age 값을 this에 저장 (예: this.age = 7)
        // getName이라는 메서드를 this에 추가 (각 객체마다 복사됨)
        this.getName = function () {
            return this.name; // 여기서의 this는 각 객체 인스턴스를 의미함
        };
        // 3. return이 명시적으로 없으므로, this가 자동으로 반환됨
    }
    /*
    생성자 호출 흐름 요약:
    1. 비어 있는 객체 생성 → this = {}
    2. 이 객체를 Ping 함수에 전달해서 내부 속성 설정
    3. return이 없으면 this 객체를 자동으로 반환
    */
    // Ping 생성자를 이용해 객체를 생성
    const baro = new Ping("바로핑", 7); // baro = { name: "바로핑", age: 7, getName: function }
    const rara = new Ping("라라핑", 8); // rara = { name: "라라핑", age: 8, getName: function }
    const copyPing = new Ping("카피핑", 12); // copyPing = { name: "카피핑", age: 12, getName: function }
    // 생성된 객체의 age 값을 1 증가시킴
    baro.age++; // 8
    rara.age++; // 9
    // 각 객체의 메서드 호출 (this는 각각 baro, rara, copyPing을 가리킴)
    console.log("이 핑의 이름은:", baro.getName(), "| 나이는:", baro.age);
    // 출력: 이 핑의 이름은: 바로핑 | 나이는: 8
    console.log("이 핑의 이름은:", rara.getName(), "| 나이는:", rara.age);
    // 출력: 이 핑의 이름은: 라라핑 | 나이는: 9
    console.log("이 핑의 이름은:", copyPing.getName(), "| 나이는:", copyPing.age);
    // 출력: 이 핑의 이름은: 카피핑 | 나이는: 12
})();
