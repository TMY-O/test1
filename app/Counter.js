
const plus = document.getElementById('plus');
const remove = document.getElementById('remove');
const display = document.getElementById('display');
const reset = document.getElementById('reset');

let num = 0;

plus.addEventListener("click",()=>{
    num += 1;
    display.textContent = num;
});

remove.addEventListener("click", () => {
    if (num > 0) {
        num -= 1;
        display.textContent = num;
    }
});

reset.addEventListener("click", () => {
    num = 0;
});


   