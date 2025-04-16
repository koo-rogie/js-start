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

  deleteElem.addEventListener("click", function (event) {
    // 삭제 방법은 선택에 따라 구현
  });

  deleteElem.setAttribute("onclick", `deleteItem(${item.no})`);
  titleElem.setAttribute("onclick", `toggleDone(${item.no})`);

  return liElem;
}

function handleAdd() {
  const inputElem = document.querySelector(".todoinput > input");
  if (inputElem.value.trim() !== "") {
    addItem(inputElem.value);
    inputElem.value = "";
    inputElem.focus();
  }
}

function handleKeyup(event) {
  if (event.key === "Enter") {
    handleAdd();
  }
}

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

function toggleDone(no) {
  const centerLien = document.createElement("s");
  console.log(no);
}

function deleteItem(no) {
  const targetLi = document.querySelector(`.todolist > li[data-no="${no}"]`);
  targetLi?.remove();
}
