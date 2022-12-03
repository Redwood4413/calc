export { selectOperator, isSelected };
const operatorQuery = document.querySelector(".operator")!;
let isSelected: boolean = false;
let operator: string = "";

const selectOperator = (e:MouseEvent) => {
  if(!e.target) return;

  const clickedOperator = (e.target as HTMLInputElement).value;

  operator = clickedOperator;

  operatorQuery.innerHTML = clickedOperator;
}