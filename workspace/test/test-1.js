function addItem() {
  const firstNum = document.querySelector("#firstNum").value;
  const secondNum = document.querySelector("#secondNum").value;
  const muNum = document.querySelector(".multiplyNum > span:nth-child(2)");

  console.log(firstNum, secondNum, muNum.innerText);

  const multiplyNum = isNaN(parseInt(firstNum * secondNum)) ? firstNum * secondNum : Nambar(firstNum * secondNum);

  console.log(multiplyNum);
}

addItem();
