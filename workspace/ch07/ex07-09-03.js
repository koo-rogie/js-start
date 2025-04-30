// 내장 객체 - Date
import * as dayjs from "dayjs";

// ex07-09-02.ts 복사
(() => {
  const dayjs = require("dayjs");
  const startDate = dayjs("2025-03-27");
  const finishDate = dayjs("2025-08-08"); // 년, 월(0부터 시작), 일

  console.log("JS 수업 시작일", getDate(startDate));
  console.log("수료일", getDate(finishDate));

  // FIXME startDate는 용쌤과 만난 날입니다. 오늘이 몇일째 되는 날인지 출력하세요.
  const today = dayjs(); // 현재 시간
  const diffDays = today.diff(startDate, "day");
  console.log(`오늘은 수업 시작일로부터 ${diffDays}일째입니다.`);

  // FIXME finishDate는 수료일입니다. 용쌤과의 수업이 앞으로 몇일 남았는지 출력하세요.
  // const diffFinish = finishDate.getTime() - today.getTime(); // 밀리초 단위 차이
  const diffFinishDays = finishDate.diff(today, "day");
  console.log(`수업 종료일까지 ${diffFinishDays}일 남았습니다.`);

  // FIXME 우리 만난지 백일째되는 날이 언제인지 출력하세요.
  const hundredDaysLater = startDate.add(100, "day");
  console.log(`우리 만난지 백일째 되는 날은 ${getDate(hundredDaysLater)}입니다.`);

  function getDate(date) {
    // FIXME date를 YYYY-MM-DD 형식으로 변환하여 반환하는 함수를 작성하세요.
    return date.format("YYYY-MM-DD");
  }
})();
