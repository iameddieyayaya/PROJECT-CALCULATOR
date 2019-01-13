
let variableA = '';
let variableB = '';
let mycond = false;
let equalsPressed = false;
let sum = '';
let lastOpValue = '';
let operand = '';


const btns = document.querySelectorAll('.btn');
btns.forEach((btn) => {
  btn.addEventListener('click', buttonClicked);
});
const deci = document.querySelector('.deci');



function buttonClicked(e){
  let valueOnClick = this.innerText;
  if(valueOnClick.match(/[0-9]+/g)){
      numsClicked(valueOnClick);
    }
  else if (valueOnClick == 'AC'){
    clear();
  }
  else if (valueOnClick == '='){
    equals();
  }
  else if(valueOnClick == '.'){
    numsClicked(valueOnClick);
    deci.removeEventListener('click', buttonClicked);
  }
  else{
    operatorClicked(valueOnClick);
  }
}


function numsClicked(number){
  if(mycond){
    variableB += number;
    calDisplay(variableB);
  }
  else{
    variableA += number;
    calDisplay(variableA);
  }
}

function clear(){
  variableA = '';
  variableB = '';
  mycond = false;
  calDisplay(0);
  deci.addEventListener('click', buttonClicked);

}

function equals(){

  if(variableA == ''){
    variableA = lastValue;
  }
  console.log(`equals = ${variableA} ${operand} ${variableB}`)
  operate(variableA, operand, variableB);
  equalsPressed = true;
}

function operatorClicked(operator){
  operand = operator;
  if(operator){
    mycond = true;
  }
  else if (operand) {
    console.log('poop');

  }
  calDisplay(operator);
  deci.addEventListener('click', buttonClicked);
}

function calDisplay(input){
  const display = document.querySelector('.output');
  display.innerHTML = input;
  console.log(input);
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
/////Does MATH////
function operate(a,operand,b){
  a = Number.parseFloat(a);
  b = Number.parseFloat(b);
  switch (operand) {
    case '+':
      sum = add(a,b);
      break;
    case '-':
      sum = subtract(a,b);
      break;
    case '*':
      sum = multiply(a,b);
      break;
    case '÷':
      sum = divide(a,b);
      break;
    default:
      return "something's wrong";
  }
  calDisplay(sum);
  lastValue = sum; //hold sum and keep doing math on it.
  variableA = '';
  variableB = '';
  mycond = false;
  operand = '';
  deci.addEventListener('click', buttonClicked);

}
