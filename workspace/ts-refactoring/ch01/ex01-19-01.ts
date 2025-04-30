(() => {
  /*
switch문
*/

  const pingName: string = "하츄핑";
  let modifier = "";

  switch (pingName) {
    case "하츄핑":
      modifier = "사랑의";
    case "눈꽃핑":
      modifier = "차가운";
    case "포싱핑":
      modifier = "복슬복슬";
    case "꾸레핑":
      modifier = "웃음의";
    case "빛나핑":
      modifier = "반짝반짝";
    default:
      modifier = "모르는";
  }

  console.log(`${modifier} ${pingName}`);
})();
