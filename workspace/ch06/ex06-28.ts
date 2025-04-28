// 타입 호환

(()=>{

  interface Member { id: number; name: string; age: number; }
  interface Guest { name: string; }

  const haru: Guest = {
    name: '하루',
  };

  const namu: Member = {
    id: 1,
    name: '나무',
    age: 8
  };

  // Guest 타입의 member를 매개변수로 받는 welcome 함수
  function welcome(member: Guest){
    console.log(`안녕하세요. ${member.name}님`);
  }

  // welcome 함수에 Guest 타입의 member를 전달해야 하지만 타입 호환이 가능한 타입도 전달 가능
  welcome(haru);

})();