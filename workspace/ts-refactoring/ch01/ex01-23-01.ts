(() => {
  /*
new Object() - 생성자 함수로 객체 생성
*/

  const userName: string = "구성연";
  const userNo: number = 13;
  const gender: string = "female";
  const level: string = "gold";
  const userPassword: string = "****";
  const userAge: number = 22;
  const userEmail: string = "rn5184@naver.com";

  const user1 = new Object();
  user1.userName = "멋사";
  user1.userNo = 1235;
  user1.gender = "female";
  user1.level = "gold";
  user1.userPassword = "****";
  user1.userAge = 13;
  user1.userEmail = "rn***@naver.com";
  console.log(user1.userName);

  const user2 = new Object();
  user2.userName = "용쌤";
  user2.userNo = 13;
  user2.gender = "female";
  user2.level = "gold";
  user2.userPassword = "****";
  user2.userAge = "**";
  user2.userEmail = "******@naver.com";
  console.log(user2.userName);
})();
