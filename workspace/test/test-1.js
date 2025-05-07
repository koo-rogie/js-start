/**
 * 텍스트와 태그를 만들어주는 코드
 * @param {{ no: number, title: string, done?: boolean }} item
 * @returns {HTMLLIElement}
 */
function getElem(item) {
  // li 생성
  const liElem = document.createElement("li"); // 새 <li> 요소 생성
  liElem.dataset.no = item.no; // data-no 속성에 item.no 할당
  liElem.dataset.done = item.done; // data-no 속성에 item.done 할당

  // 번호 표시 span
  const noElem = document.createElement("span"); // 번호 표시용 <span> 생성
  const numNode = document.createTextNode(item.no); // item.no 값을 텍스트 노드로
  noElem.setAttribute("aria-label", `${item.no}번째`); // 번호 span에 aria-label 추가
  noElem.appendChild(numNode); // 번호 span에 번호 텍스트 추가

  // 제목 표시 span
  let titleElem = document.createElement("span"); // 제목 표시용 <span> 생성
  const textNode = document.createTextNode(item.title); // item.title 값을 텍스트 노드로
  titleElem.setAttribute("title", `${item.title}`); // 제목 span에 aria-label 추가
  titleElem.appendChild(textNode); // 제목 span에 제목 텍스트 추가

  // 삭제버튼 button
  const delElem = document.createElement("button"); // 삭제버튼 <button> 생성
  const delText = document.createTextNode("삭제");
  delElem.setAttribute("title", "버튼을 눌러 삭제하시겠습니까?"); // 제목 span에 title 추가
  delElem.appendChild(delText); // 제목 span에 제목 텍스트 추가

  // 완료버튼 button
  const togElem = document.createElement("button"); // 토글버튼 <button> 생성
  const togtext = document.createTextNode("완료");
  togElem.setAttribute("title", "버튼을 눌러 완료하시겠습니까?"); // 제목 span에 title 추가
  togElem.appendChild(togtext); // 제목 span에 제목 텍스트 추가

  // 수정버튼 button
  const renamElem = document.createElement("button"); // 토글버튼 <button> 생성
  const renamtext = document.createTextNode("수정");
  renamElem.setAttribute("title", "버튼을 눌러 수정하시겠습니까?"); // 제목 span에 title 추가
  renamElem.appendChild(renamtext); // 제목 span에 제목 텍스트 추가

  // li 요소에 span들 붙이기
  liElem.appendChild(noElem); // li에 번호 span 추가
  liElem.appendChild(titleElem); // li에 제목 span 추가
  liElem.appendChild(delElem); // li에 제목 span 추가
  liElem.appendChild(togElem); // li에 완료 button 추가
  liElem.appendChild(renamElem); // li에 수정 button 추가

  // 삭제
  delElem.addEventListener("click", function (e) {
    const btn = e.target;
    const liNode = btn.closest("li");
    deleteItem(liNode.dataset.no);
  });

  // 완료
  togElem.addEventListener("click", function () {
    console.log("선택이 됐냐");
  });

  // 수정
  renamElem.addEventListener("click", function () {
    titleElem = document.createElement("input");
    console.log("선택이 됐냐");
  });

  return liElem; // 구성된 li 요소 반환
}

/**
 * updateNum 삭제 버튼을 클릭하면 앞의 no의 순서 최신화시킴
 */
function updateNum() {
  const items = document.querySelectorAll(".text-list li");
  items.forEach((elem, i) => {
    const no = i + 1;
    elem.dataset.no = no;
    const span = elem.querySelector("span:first-child");
    span.textContent = no;
    span.setAttribute("aria-label", `${no}번째`);
  });
}

/**
 *
 * @param {*} no -deleteItem li의 data-no의 번호를 선택해서 부모 li의 숫
 */
function deleteItem(no) {
  const li = document.querySelector(`.text-list>li[data-no="${no}"]`);
  if (li) {
    li.remove();
    updateNum();
  }
}

/**
 * 입력창의 값이 비어있지 않으면 새 아이템을 추가
 * @returns {void}
 */
function handleAdd() {
  const inputElem = document.querySelector(".input-box>input"); // 입력창 선택
  if (inputElem.value.trim() !== "") {
    // 공백 검사
    addItem(inputElem.value); // 아이템 추가 함수 호출
    inputElem.value = ""; // 입력창 초기화
    inputElem.focus(); // 포커스 유지
  }
}

/**
 * Enter 키 입력 시 handleAdd 호출
 * @param {KeyboardEvent} event — 키보드 이벤트 객체
 * @returns {void}
 */
function handleKeyup(event) {
  if (event.key === "Enter") {
    // 눌린 키가 Enter인지 확인
    handleAdd(); // 아이템 추가 처리
  }
}

/**
 * 새 아이템 객체를 만들고 리스트에 추가
 * @param {string} title — 추가할 아이템 제목
 * @returns {void}
 */
function addItem(title) {
  const textBox = document.querySelector(".text-list"); // 리스트 컨테이너 선택
  const item = {
    no: textBox.children.length + 1, // 현재 항목 개수 + 1을 번호로
    title, // 전달받은 제목 할당
    done: false,
  };
  const carLi = getElem(item); // getElem으로 li 생성
  textBox.appendChild(carLi); // 리스트에 li 추가
}

/**
 * 버튼 클릭, 키 입력 등 이벤트 리스너 설정
 * @returns {void}
 */
function attachEventListeners() {
  // TODO: handleAdd, handleKeyup 등 이벤트 바인딩
  // 추가/제거 버튼 선택
  const addBtn = document.querySelector(".addList");
  const removeBtn = document.querySelector(".removeList");
  const inputBox = document.querySelector(".input-box>input");
  const textBox = document.querySelector(".text-list");

  // 버튼 클릭 이벤트 리스너 등록
  addBtn.addEventListener("click", handleAdd);
  inputBox.addEventListener("keyup", handleKeyup);

  addBtn.addEventListener("click", function () {
    console.log("클릭됐니?"); // 추가 버튼 클릭 시 로그
    // getElem();
  });
  removeBtn.addEventListener("click", () => {
    textBox.textContent = ""; // 전체 목록 제거
  });
}

attachEventListeners();
