const displayOperator = document.querySelector('.displayOperator');
const displayMain = document.querySelector('.displayMain');
const btns = document.querySelectorAll('.btn') ;
const equal = document.querySelector('.equal') ;
const clear = document.querySelector('.clear') ;
const clearAll = document.querySelector('.clearAll');

btns.forEach(btn => {
    btn.addEventListener('click' , () => {
        let content = btn.getAttribute('data-num');
        displayOperator.textContent += content ;
    })
})
clearAll.addEventListener('click' , () => {
    displayOperator.textContent = '' ;
    displayMain.textContent = '' ;
})
equal.addEventListener('click' , () => {
    let expression = displayOperator.textContent ;
    displayOperator.textContent = eval(expression);
    displayMain.textContent = eval(expression);
})
clear.addEventListener('click', ()=>{
    let str = displayOperator.textContent ;
    let arr = str.split('') ;
    arr.pop();
    displayOperator.textContent = arr.join('') ;
})