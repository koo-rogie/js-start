(() => {
  /*
JSON 표기법 - 리터럴 방식으로 객체 생성
JavScript Object Notation
JSON은 자바스크립트 객체 표기법으로, 자바스크립트에서 객체를 표현하는 방법이다.
*/

  const foo: object = {
    name: "구성연",
    age: 22,
    job: "개발자(이고 싶은...)",
    marride: false,
  };

  foo.email = "json@naver.com"; // 추가적으로 선언하고 싶을때 사용함

  console.log(foo); // { name: '구성연', age: 22, job: '개발자(이고 싶은...)', marride: false }

  // 네트워크로 전송할때는 꼭 문자열을 큰 따옴표로 감싸야 한다.
  // JSON.stringify() 함수를 사용하면 객채를 JSON형태의 문자열로 변환 가능
  const strFoo = JSON.stringify(foo); // 객체를 JSON 문자열로 변환
  console.log("strFoo를 출력하면?: ", typeof strFoo, strFoo); // strFoo를 출력하면?:  string {"name":"구성연","age":22,"job":"개발자(이고 싶은...)","marride":false,"email":"json@naver.com"}

  // JSON.parse() 함수를 사용하면 JSON 형태의 문자열을 객체로 변환가능
  const objFoo = JSON.parse(strFoo); // JSON 문자열을 객체로 변환
  console.log("objFoo를 출력하면?: ", typeof objFoo, objFoo); // object
})();
