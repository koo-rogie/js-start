/*
querySelector를 이용해서 첫번째, 마지막 항목 출력
*/

// querySelector를 사용한 CSS 선택자 방식으로 마지막 요소 선택
// #purchases: id가 purchases인 요소
// > li:first-child: purchases의 직계 자식 중 첫번째 li 요소
console.log(document.querySelector('#purchases > li:first-child').firstChild.nodeValue);

// querySelector를 사용한 CSS 선택자 방식으로 마지막 요소 선택
// #purchases: id가 purchases인 요소
// > li:last-child: purchases의 직계 자식 중 마지막 li 요소
console.log(document.querySelector('#purchases > li:last-child').firstChild.nodeValue);