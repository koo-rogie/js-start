// 일반 함수(동기 방식)

(()=>{
  function f1(){
    console.log('f1 호출됨.');

    console.log(`작업중...`);

    console.log('f1 리턴됨.');
  }

  function test(){
    console.log('test 호출됨.');
    f1();
    console.log('test 리턴됨');
  }

  // FIXME 프로그램 실행 흐름에 맞춰서 콘솔 출력 메세지 앞에 번호 추가
  console.log('작업 시작.');
  test();
  console.log('작업 종료.');
})();

