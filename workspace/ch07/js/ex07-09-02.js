"use strict";
// 내장 객체 - Date
(() => {
    const startDate = new Date('2025-03-27');
    const finishDate = new Date(2025, 7, 8); // 년, 월(0부터 시작), 일
    console.log('JS 수업 시작일', getDate(startDate));
    console.log('수료일', getDate(finishDate));
    // FIXME startDate는 용쌤과 만난 날입니다. 오늘이 몇일째 되는 날인지 출력하세요.
    const today = new Date(); // 현재 시간
    console.log(`오늘은 수업 시작일로부터 xxx일째입니다.`);
    // FIXME finishDate는 수료일입니다. 욤쌤과의 수업이 앞으로 몇일 남았는지 출력하세요.
    console.log(`수업 종료일까지 xxx일 남았습니다.`);
    // FIXME 우리 만난지 백일째되는 날이 언제인치 출력하세요.
    console.log(`우리 만난지 백일째 되는 날은 xxx일 입니다.`);
    function getDate(date) {
        // FIXME date를 YYYY-MM-DD 형식으로 변환하여 반환하는 함수를 작성하세요.
        return ``;
    }
})();
