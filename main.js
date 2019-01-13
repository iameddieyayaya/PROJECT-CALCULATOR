
const calcDisplay = document.querySelector('.output');
const keys = document.querySelector('allButtons btn');

keys.addEventListener('click', e =>{
  if (e.target.matches('button')){
      const key = e.target;
      const action = key.dataset.action;
      if(!action){
        console.log('number key!');
      }
  }
})
