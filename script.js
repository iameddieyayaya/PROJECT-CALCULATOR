eButtons();

function eButtons(){
  const numBtns = document.querySelectorAll('.num');
  numBtns.forEach((btn) =>{
    btn.addEventListener('click', num09);
  });

  const operatorBtns = document.querySelectorAll('.operator');
  operatorBtns.forEach((btn) =>{
    btn.addEventListener('click', operator);
  })

  const negateBtn = document.querySelector('.negate');
  negateBtn.addEventListener('click', negate);

  const percentageBtn = document.querySelector('.percentage');
  percentageBtn.addEventListener('click', percentage);

  const decimalBtn = document.querySelector('.deci');
  decimalBtn.addEventListener('click', decimal);

  const clearBtn = document.querySelector('.clear');
  clearBtn.addEventListener('click',clear);
}





///MATH FUNCTIONS///
function add(a,b){
  return a + b;
}
function subtract(a,b){
  return a - b;
}
function multiply(a,b){
  return a * b;
}
function divide(a,b){
  if(a == 0 || b == 0){
    return 'Very Funny!';
  }
  return a / b;
}
/// Operator ///
function operate(operator, a, b) {
  switch(operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
     return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
    default:
      return "No Bueno!";
  }
