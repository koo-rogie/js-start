"use strict";
// URL 정보 표시
const urlInfo = document.querySelector("#urlInfo");
if (urlInfo) {
    urlInfo.textContent = `
    전체 URL: ${location.href}
    프로토콜: ${location.protocol}
    호스트: ${location.host}
    포트: ${location.port}
    경로: ${location.pathname}
    쿼리스트링: ${location.search}
  `;
}
// assign 테스트 - 구글로 이동
document.getElementById("testAssign")?.addEventListener("click", () => {
    location.assign("https://www.google.com");
});
// href 테스트 - Daum으로 이동
document.getElementById("testHref")?.addEventListener("click", () => {
    location.href = "https://www.daum.net/";
});
// replace 테스트 - 네이버로 이동
document.getElementById("testReplace")?.addEventListener("click", () => {
    location.replace("https://www.naver.com");
});
// reload 테스트
document.getElementById("testReload")?.addEventListener("click", () => {
    location.reload();
});
// 호스트네임 변경 테스트
document.getElementById("changeHostname")?.addEventListener("click", () => {
    const newHostName = "www.example.com";
    const url = new URL(location.href);
    console.log(url);
    url.hostname = newHostName;
    location.href = url.toString();
});
// URL 파라미터 추가 테스트
document.getElementById("addParameter")?.addEventListener("click", () => {
    const currenUrl = new URL(location.href);
    currenUrl.searchParams.set("page", "2");
    currenUrl.searchParams.set("keyword", "dogs");
    location.href = currenUrl.toString();
});
