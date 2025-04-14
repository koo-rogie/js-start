/*
첫번째와 마지막 구매 항목을 출력
firstChild, firstElementChilde, lastChild, lastElementChild: 자식요소 접근
*/

// getElementsByClassName: class 속성으로 요소 선택 (배열 형태로 반환되므로 인덱스 지정 필요)
const shoppingList = document.getElementsByClassName("list")[0]; // ul 요소 선택

// firstElementChild 사용: 직접 첫 번째 자식 요소 선택
const firstLi = shoppingList.firstElementChild; // 첫 번째 li 요소 선택

// firstChild를 사용하여 텍스트 노드 선택 (요소 노드의 실제 텍스트 내용)
const firstTextNode = firstLi.firstChild; // 텍스트 노드 객체 선택
console.log("제일 먼저 구매할 항목", firstTextNode.nodeValue); // nodeValue로 실제 텍스트 값 출력

// lastElementChild를 사용하여 마지막 li 요소의 텍스트 내용 출력
console.log("마지막으로 사야할 품목", shoppingList.lastElementChild.firstChild.nodeValue);

// 최승균
// 코카콜라맛있다 맛있으면 또먹어
// 또먹으면 배탈나~
// const firstChild = shoppingList.firstElementChild;
// let cocacola = firstChild.nextElementSibling;
// let i = 0;
// while (i < 9) {
//   if (i % 2 == 0) {
//     cocacola = cocacola.nextElementSibling;
//   } else {
//     cocacola = cocacola.previousElementSibling;
//   }
//   i++;
// }
// console.log(cocacola.firstChild.nodeValue);

// 최승균(오류, 버그, 에러가 아닌 버그, 이게 더 문제)
// const firstChild = shoppingList.firstElementChild;
// let cocacola = firstChild.nextElementSibling;
// cocacola = firstChild.nextElementSibling;
// console.log(cocacola.firstChild.nodeValue);

// 임한길
// const liList = shoppingList.getElementsByTagName('li'); // [li, li, li]
// const lastLi = liList[liList.length-1];
// const lastText = lastLi.firstChild.nodeValue;

// 송채은
// 라면꺼내기
// const lastli =
//     firstLi.nextElementSibling.nextElementSibling.firstChild.nodeValue;
//   console.log(`지금하고있는거 : ${lastli}`);

// 노현수
// const lastTextNode = shoppingList.lastElementChild.firstChild;
// console.log('마지막으로 구매할 항목', lastTextNode.nodeValue);

// 박선영
// const purchases = document.getElementById('purchase');
// let purchaseItem = purchases.firstElementChild;
// while (purchaseItem.nextElementSibling) {
//   purchaseItem = purchaseItem.nextElementSibling;
// }
// console.log('드디어탈출', purchaseItem.firstChild.nodeValue);

// 구성연
// const lastLi = shoppingList.lastElementChild.firstChild;
// console.log("마지막으로 사야할 품목", lastLi.nodeValue);

// 조현수
// const product = shoppingList.getElementsByTagName("li");
// for (let i = 0; i < product.length; i++) {
//   let buyProduct = li[i];
//   if (i % 2 === 0) {
//     if (i === 0) {
//       continue;
//     }
//     console.log(buyProduct.firstChild.nodeValue);
//     break;
//   }
// }
