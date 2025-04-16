document.addEventListener("DOMContentLoaded", () => {
  // 처음버전
  let plusbtn = document.querySelector(".plus");
  let minusbtn = document.querySelector(".minus");
  let resetbtn = document.querySelector(".reset");
  let countSpan = document.querySelector("#container span");
  let count = 0;
  // const count = parseInt(countSpan.firstChild.nodeValue);

  plusbtn.addEventListener("click", () => {
    // 플러스를 클릭했을때
    // countSpan.firstChild.nodeValue = count + 1;
    count++;
    countSpan.textContent = count;
  });
  minusbtn.addEventListener("click", () => {
    // 마이너스를 클릭했을때
    count--;
    countSpan.textContent = count;
  });
  resetbtn.addEventListener("click", () => {
    // 리셋을 클릭했을때
    count = 0;
    countSpan.textContent = count;
  });

  // const count = parseInt(countSpan.firstChild.nodeValue);
});
