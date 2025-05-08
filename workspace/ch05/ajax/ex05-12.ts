import { type Cat } from "./types.js";
import { appendImages } from "./utils.js";

// 랜덤 고양이 이미지 가져오기 - XMLHttpRequest 사용
const url = "https://api.thecatapi.com/v1/images/search";

const btn = document.querySelector("button"); // 버튼 찾기
btn?.addEventListener("click", getImages); // 버튼을 "클릭했을 때" getImages를 호출
// btn?.addEventListener("click", getImages()); // 클릭하지 않았을때도 호출함.. 위의 방식이 맞음

function getImages(): void {
  // Ajax 프로그래밍 순서
  //1. XHLHTTMpRequest 객체 생성
  const xhr = new XMLHttpRequest();

  // 2. 요청준비(open)
  xhr.open("GET", url, true);

  // 4. 응답 데이터 처리
  xhr.addEventListener("load", function () {
    const result = this.responseText; // 여기서 this는 xhr
    // const result = xhr.responseText; // xhr을 쓸경우 클로저가 생성됨, 메모리를 잡아먹음
    console.log(result);

    const data: Cat[] = JSON.parse(result);
    console.log(data);
    appendImages(data);
  });

  // 3. 서버에 요청(send)
  xhr.send();
}
