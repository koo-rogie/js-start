function main() {
  const data = getDate(); // data에서 값을 꺼내서 문제 해결하는 코드 작성

  
}



function getDate() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString().trim().split(" ");

  const result = new Object();

  result.a = parseInt(fileData[0]);
  result.b = parseInt(fileData[1]);

  return result;
}

main();
