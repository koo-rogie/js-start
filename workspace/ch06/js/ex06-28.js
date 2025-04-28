"use strict";
// 타입 호환
(() => {
    const haru = {
        name: '하루',
    };
    const namu = {
        id: 1,
        name: '나무',
        age: 8
    };
    // Guest 타입의 member를 매개변수로 받는 welcome 함수
    function welcome(member) {
        console.log(`안녕하세요. ${member.name}님`);
    }
    // welcome 함수에 Guest 타입의 member를 전달해야 하지만 타입 호환이 가능한 타입도 전달 가능
    welcome(haru);
})();
