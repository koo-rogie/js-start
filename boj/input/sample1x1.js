function main() {
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  
}
main();

/**
 * 표준 입력장치(콘솔)에서 한 줄로 입력된 한 건의 데이터를 읽어서 반환한다.
 * @returns {string|number} 읽은 데이터(숫자일 경우 number로 형변환)
 */
function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString().trim();
  const result = isNaN(fileData) ? fileData : Number(fileData);
  return result;
}