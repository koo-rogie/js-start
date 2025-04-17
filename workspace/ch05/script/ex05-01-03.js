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
