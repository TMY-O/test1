const displayAdd = document.getElementById('displayAdd');
const startAdd = document.getElementById('startAdd');
const stopAdd = document.getElementById('stopAdd');
const resetAdd = document.getElementById('resetAdd');

const plus = document.getElementById('plus');
const remove = document.getElementById('remove');
const displayRemove = document.getElementById('displayRemove');
const startRemove = document.getElementById('startRemove');
const stopRemove = document.getElementById('stopRemove');
const resetRemove = document.getElementById('resetRemove');

let timeID;
let timeAdd = 0;

let timeDownID;
let timeDown = 0;

// タイムアップタイマー
startAdd.addEventListener("click", () => {
    clearInterval(timeID); // タイマーを止める
    timeID = setInterval(() => {
        timeAdd += 1;
        displayAdd.textContent = timeAdd;
    }, 1000);
});

stopAdd.addEventListener("click", () => {
    clearInterval(timeID); 
});

resetAdd.addEventListener("click", () => {
    clearInterval(timeID);
    timeAdd = 0;
    displayAdd.textContent = timeAdd;
});

/////////////////////////////

// タイムダウンタイマー
plus.addEventListener("click", () => {
    timeDown += 1;
    displayRemove.textContent = timeDown;
});

remove.addEventListener("click", () => {
    if (timeDown > 0) {
        timeDown -= 1;
        displayRemove.textContent = timeDown;
    }
});

startRemove.addEventListener("click", () => {
    clearInterval(timeDownID);
    timeDownID = setInterval(() => {
        if (timeDown > 0) {
            timeDown -= 1;
            displayRemove.textContent = timeDown;
        } else {
            clearInterval(timeDownID); // 0になったら止める
        }
    }, 1000);
});

stopRemove.addEventListener("click", () => {
    clearInterval(timeDownID); 
});

resetRemove.addEventListener("click", () => {
    clearInterval(timeDownID);
    timeDown = 0;
    displayRemove.textContent = timeDown;
});
