const text = document.querySelector('input');
const save = document.getElementById('save');
const memoStc = document.getElementById('memoStc');

//画面を読み込んだらローカルストレージから、memoStcにメモが渡される
window.addEventListener("load",()=>{
        const memory = localStorage.getItem("memos");
        if(memory){
            const memos = JSON.parse(memory);
            memos.forEach(memo => {
                createMemo(memo);
            });
        }
});

function createMemo(content){
    const li = document.createElement('li');
    const textarea = document.createElement("textarea");     
    textarea.value = content;
    textarea.disabled = true;

    //消去ボタン
    const deleat = document.createElement('button');
    deleat.textContent ="消去";
    deleat.style.marginLeft = "10px";
    edit.classList.add("edit-btn");
    deleat.addEventListener("click", ()=>{
        li.remove();
        updateStrage();
    });


    //編集ボタン
    const edit = document.createElement('button');
    edit.textContent ="編集";
    edit.style.marginLeft = "10px";
    edit.addEventListener("click", ()=>{
        textarea.disabled = !textarea.disabled;
        updateStrage(); 
    });

    //liと消去ボタンと編集ボタンを組み合わせる
    li.appendChild(textarea);
    li.appendChild(deleat);
    li.appendChild(edit);
    memoStc.appendChild(li);
}

//保存ボタンが押された時のファンクション(creatMemoをつかう)
save.addEventListener("click", ()=>{
    if(text.value.trim()==="")return;
    createMemo(text.value);
    text.value="";
    updateStrage();
});

//ローカルストレージに保存(updateStrageをつくる)
function updateStrage(){
    const memos = [];
    memoStc.querySelectorAll('textarea').forEach(t=>{
        memos.push(t.value);    
    });
    localStorage.setItem("memos",JSON.stringify(memos));
}
