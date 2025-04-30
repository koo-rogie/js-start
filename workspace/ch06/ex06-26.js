"use strict";
// 타입 가드 - 속성 값으로 타입 체크
(() => {
    const user1 = {
        name: '하루',
        age: 5,
        admin: false,
    };
    const user2 = {
        name: '나무',
        admin: true,
        level: 2
    };
    helloUser(user1);
    helloUser(user2);
    // User 타입이나 AdminUser 타입을 받아서 각각의 타입에 맞는 코드를 실행하는 함수
    function helloUser(user) {
        if (user.admin === true) {
            console.log(`안녕하세요. 레벨 ${user.level} ${user.name} 관리자님.`);
        }
        else {
            console.log(`안녕하세요. ${user.age}살 ${user.name} 회원님.`);
        }
    }
})();
