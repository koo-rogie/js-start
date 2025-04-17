// 한건의 Todo 객체를 받아서 DOM 객체로 만들어 반환
function getTodoItemElem(item) {
  // 태그들 생성
  const liElem = document.createElement("li"); // <li> 요소 생성
  const noElem = document.createElement("span"); // <span> 요소 생성 => 번호
  const titleElem = document.createElement("span"); // <span> 요소 생성 => 할일 목록
  const deleteElem = document.createElement("button"); // <button> 요소 생성 => 삭제 버튼

  // 텍스트 생성
  const noTxt = document.createTextNode(item.no); // 할일의 번호 생성
  const titleTxt = document.createTextNode(item.title); // 할일의 제목 생성
  const deleteTxt = document.createTextNode("삭제"); // 삭제 버튼의 텍스트 생성

  // 태그에 텍스트 추가
  noElem.appendChild(noTxt); // <span> 요소에 번호 텍스트 추가 => <span>3</span>
  titleElem.appendChild(titleTxt);
  deleteElem.setAttribute("type", "button"); // <button> 요소에 type 속성 추가 => <button type="button">
  titleElem.setAttribute("tabindex", 0); // <span> 요소에 tabindex 속성 추가 => <span tabindex="0">샘플3</span>
  deleteElem.appendChild(deleteTxt); // <button> 요소에 삭제 버튼 텍스트 추가 => <button type="button">삭제</button>

  // li의 자식으로 추가
  liElem.appendChild(noElem); // <li> 요소에 번호 추가 => <li><span>3</span></li>
  liElem.appendChild(titleElem); // <li> 요소에 제목 추가 => <li><span>3</span><span>샘플3</span></li>
  liElem.appendChild(deleteElem); // <li> 요소에 삭제 버튼 추가 => <li><span>3</span><span>샘플3</span><button type="button">삭제</button></li>

  //liElem에 cusom  속성추가 data-no, data-boolean
  // <li data-no="n">
  liElem.dataset.no = item.no; // <li data-no="3"><span>3</span><span tabindex="0">샘플3</span><button type="button">삭제</button></li>
  liElem.dataset.boolean = item.done; // <li data-no="3" data-boolean="false"><span>3</span><span tabindex="0">샘플3</span><button type="button">삭제</button></li>

  //이벤트방법(1) : DOM Level2 방식
  deleteElem.addEventListener("click", function (event) {
    // 1. 삭제의 첫번째 방법
    // const btn = event.target; // 클릭 이밴트가 발생한 요소 (button)
    // const liNode = btn.closest("li"); // 클릭한 버튼의 조상 요소 중에서 가장 가까운 li 요소를 찾음
    // deleteItem(liNode.dataset.no); // li 요소의 data-no 속성값을 가져옴
    // 2. 삭제의 두번째 방법
    // 클로저 단원에서 이상한 부분 확인
    // deleteItem(item.no); // item.no를 이용하여 삭제
  });
  // 3. 삭제의 세번째 방법  : DOM Level0 방식
  deleteElem.setAttribute("onclick", `deleteItem(${item.no})`); // 삭제 버튼 클릭 시 deleteItem() 호출

  // 완료/ 미완료 처리
  titleElem.setAttribute("onclick", `toggleDone(${item.no})`); // 삭제 버튼 클릭 시 deleteItem() 호출

  // 리턴함
  return liElem;
}

// "추가" 버튼 클릭 이벤트 핸들러
function handleAdd() {
  const inputElem = document.querySelector(".todoinput > input");
  if (inputElem.value.trim() !== "") {
    addItem(inputElem.value); // <input>, <select> 같은 폼의 입력 요소에는 value 속성으로 사용자가 입력/선택한 값이 저장되어 있음
    inputElem.value = "";
    inputElem.focus();
  }
}

// 엔터 키를 눌렀을때 처리할 이벤트 핸들러
function handleKeyup(event) {
  // 키보드 이벤트 정보를 가지고 있는 Event 객체
  if (event.key === "Enter") {
    handleAdd();
  }
}

// 할일 추가
function addItem(title) {
  const todoList = document.querySelector(".todolist");

  const item = {
    // no: todoList.childNodes.length + 1,
    no: todoList.children.length + 1, // 자식 노드의 개수 + 1
    // title: title, // 속성값을 담는 변수가 속성명과 일치할 경우 속성값 생략 가능
    title,
    done: false, // 미완료 상태
  };
  const todoLi = getTodoItemElem(item);
  console.log(todoLi);

  todoList.appendChild(todoLi);
}

/**
 * 특정 할 일의 완료 상태를 토글합니다. (완료 ↔ 미완료)
 * @param {number} no - 토글할 할 일의 고유 번호
 */
function toggleDone(no, done, title) {
  const targetNo = document.querySelector(`.todolist > li[data-no="${no}"]`);
  const targetDone = document.querySelector(`.todolist > li[data-boolean="${done}"]`);
  console.log("매개변수 확인하기 위에", no, done, title);
  console.log("data 타입 불러오기", targetNo);

  if (targetDone === true) {
    // 완성 상태일때
    // item.title이 이 안에 없기때문에 안불러와짐
    // 긋기 취소
    const titleElem = document.createElement("span"); // <span> 요소 생성 => 할일 목록
    const titleTxt = document.createTextNode(title); // 할일의 제목 생성
    titleElem.appendChild(titleTxt); // <span> 요소에 완료된 할일 목록 추가 => <span><s></s></span>
    // false로 변경
    done = false;
    console.log("어디가 실행됐을까 if문", no, done, title);
  } else {
    // 미완성 상태일때
    // 긋고
    const titleElem = document.createElement("span"); // <span> 요소 생성 => 할일 목록
    const titleTxt = document.createTextNode(title); // 할일의 제목 생성
    const centerLienElem = document.createElement("s"); // <s> 요소 생성 => 완료된 할일 목록
    centerLienElem.appendChild(titleTxt); // <s> 요소에 제목 텍스트 추가 => <s>샘플3</s>
    titleElem.appendChild(centerLienElem); // <span> 요소에 완료된 할일 목록 추가 => <span><s></s></span>
    // true로 변경
    done = true;
    console.log("어디가 실행됐을까 else문", no, done, title);
  }
  console.log("매개변수 확인하기(아래)", no, done, title);
}

/**
 * 특정 할 일을 삭제합니다.
 * @param {number} no - 삭제할 할 일의 고유 번호
 */
function deleteItem(no) {
  const targetLi = document.querySelector(`.todolist > li[data-no="${no}"]`);
  targetLi?.remove();
}
