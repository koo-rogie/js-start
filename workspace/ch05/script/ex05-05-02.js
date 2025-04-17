/**
 * Todo 아이템 하나를 표현하는 DOM 요소를 생성하는 함수
 * @param {Object} item - Todo 아이템 객체 {no: number, title: string, done: boolean}
 * @returns {HTMLElement} 생성된 Todo 아이템의 DOM 요소
 */
function getTodoItemElem(item) {
  const liElem = document.createElement("li");
  const noElem = document.createElement("span");
  const titleElem = document.createElement("span");
  const deleteElem = document.createElement("button");

  const noTxt = document.createTextNode(item.no);
  const titleTxt = document.createTextNode(item.title);
  const deleteTxt = document.createTextNode("삭제");

  noElem.appendChild(noTxt);
  titleElem.appendChild(titleTxt);
  deleteElem.setAttribute("type", "button");
  titleElem.setAttribute("tabindex", 0);
  deleteElem.appendChild(deleteTxt);

  liElem.appendChild(noElem);
  liElem.appendChild(titleElem);
  liElem.appendChild(deleteElem);

  liElem.dataset.no = item.no;
  liElem.dataset.done = item.done;

  deleteElem.addEventListener("click", function (event) {
    const btn = event.target;
    const liNode = btn.closest("li");
    deleteItem(liNode.dataset.no);
  });

  titleElem.addEventListener("click", function (event) {
    const btn = event.target;
    const liNode = btn.closest("li");
    toggleDone(liNode.dataset.no);
  });

  return liElem;
}

/**
 * 추가 버튼 클릭 시 실행되는 이벤트 핸들러
 * 입력창의 값을 가져와 새로운 Todo 아이템을 추가
 */
function handleAdd() {
  const inputElem = document.querySelector(".todoinput > input");
  if (inputElem.value.trim() !== "") {
    addItem(inputElem.value);
    inputElem.value = "";
    inputElem.focus();
  }
}

/**
 * 입력창에서 키보드 입력 시 실행되는 이벤트 핸들러
 * Enter 키 입력 시 추가 기능 실행
 * @param {KeyboardEvent} event - 키보드 이벤트 객체
 */
function handleKeyup(event) {
  if (event.key === "Enter") {
    handleAdd();
  }
}

/**
 * 새로운 Todo 아이템을 목록에 추가하는 함수
 * @param {string} title - 추가할 Todo 아이템의 제목
 */
function addItem(title) {
  const todoList = document.querySelector(".todolist");

  const item = {
    no: todoList.children.length + 1,
    title,
    done: false,
  };
  const todoLi = getTodoItemElem(item);
  console.log(todoLi);

  todoList.appendChild(todoLi);
}

/**
 * Todo 아이템의 완료/미완료 상태를 토글하는 함수
 * @param {number} no - 토글할 Todo 아이템의 번호
 */
function toggleDone(no) {
  const targetLi = document.querySelector(`.todolist > li[data-no="${no}"]`);
  const done = targetLi.dataset.done === "true";
  console.log("done의 타입은", typeof done, done);
  const titleElem = targetLi.querySelector("span:last-of-type");
  console.log(titleElem);
  if (done) {
    titleElem.appendChild(titleElem.firstChild.firstChild);
    titleElem.firstChild.remove();
  } else {
    const sElem = document.createElement("s");
    sElem.appendChild(titleElem.firstChild);
    titleElem.appendChild(sElem);
  }
  targetLi.dataset.done = !done;

  console.log("no의 번호는?", no);
}

/**
 * Todo 아이템을 삭제하는 함수
 * @param {number} no - 삭제할 Todo 아이템의 번호
 */
function deleteItem(no) {
  const targetLi = document.querySelector(`.todolist > li[data-no="${no}"]`);
  targetLi?.remove();
}
