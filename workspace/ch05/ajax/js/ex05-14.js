// 랜덤 고양이 이미지 가져오기 - axios 라이브러리
// ex05-13.ts 복사
import { appendImages } from "./utils.js";
// 랜덤 고양이 이미지 가져오기 - XMLHttpRequest 사용
const url = "https://api.thecatapi.com/v1/images/search"; // 정상 작동 링크
// const url = "https://api.thecatapi.commm/v1/images/search"; // catch 코드 발생
// const url = "https://api.thecatapi.com/v1/imags/search"; // else 코드 출력 404 띄우는 코드
const btn = document.querySelector("button"); // 버튼 찾기
btn?.addEventListener("click", getImages); // 버튼을 "클릭했을 때" getImages를 호출
// btn?.addEventListener("click", getImages()); // 클릭하지 않았을때도 호출함.. 위의 방식이 맞음
async function getImages() {
    try {
        const response = await axios.get(url);
        const data = response.data;
        appendImages(data);
    }
    catch (err) {
        console.log(err); // catch는 서버랑 통신이 안된경우
    }
}
