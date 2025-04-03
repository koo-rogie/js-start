/*
매개변수를 가진 함수 - 도어락
도어락은 비밀번화가 입력되면 문이 열린다
잘못된 비밀번호가 입력되면 경보음이 울린다
*/

function boorLock(password) {
  const pwd = "1234";
  const subPassword = password.slice(-pwd.length, password.length);
  if (subPassword === pwd) {
    console.log("문이 열렸습니다");
  } else {
    console.log("🔥 비밀번호가 다릅니다 다시 시도해주세요 🔥 ");
  }
}

boorLock("1234");
boorLock("123412354564789456451234");
boorLock("1116");
