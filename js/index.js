const display = document.querySelector('.calc .display');
document.querySelectorAll('.calc .buttons button')
    .forEach( btn => btn.addEventListener('click', btnClicked));

function btnClicked(ev) {
    display.value += ev.target.innerText;

document.querySelector('.calc .eq').addEventListener('click' ,
  () => display.value = eval(display.value) );
  if (display.value === '0/0') {display.value = 'Error' };
}

if (display.value === 'undefined') {display.value = 0};
document.querySelector('.calc .nullify').addEventListener('click', () => display.value = display.innerHTML = '' );

