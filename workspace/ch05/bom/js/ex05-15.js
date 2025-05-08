"use strict";
const ua = document.querySelector("#user-agent"); // userAgent
const lang = document.querySelector("#language"); // 브라우저 언어
const platform = document.querySelector("#platform"); // 플랫폼
const inOnline = document.querySelector("#online-status"); // 온라인 상태
if (ua) {
    ua.textContent = window.navigator.userAgent;
}
if (lang) {
    lang.textContent = window.navigator.language;
}
if (platform) {
    platform.textContent = navigator.userAgentData.platform;
}
if (inOnline) {
    inOnline.textContent = navigator.onLine ? "온라인" : "오프라인";
}
console.log(navigator);
