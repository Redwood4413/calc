export {typingNumbers};

const firstNumQuery = document.querySelector(".first")!;
const secondNumQuery = document.querySelector(".second")!;
let firstNum: string = "0"
firstNumQuery.innerHTML = firstNum;

let secondNum: string = "";

const typingNumbers = (e:MouseEvent) => {
  navigator.vibrate(40);

  if(!e.target) return;
  const clickedValue = (e.target as HTMLInputElement).value;

  if(firstNum === "0" && clickedValue === "0") return;

  if(firstNum.includes(".") && clickedValue === ".") return;

  if(firstNum === "0") {
    firstNum = clickedValue
  }else {
    firstNum += clickedValue
  };

  if(clickedValue === "+/-") {
    if(firstNum.includes("-")) firstNum = firstNum.slice(1);
    else firstNum = `-${firstNum}`
  }

  firstNumQuery.innerHTML = firstNum;
}
