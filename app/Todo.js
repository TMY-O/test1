const input = document.querySelector('input');
const save = document.getElementById('save');

const inpStc= document.getElementById('inpStc');
// const deleat = document.getElementById."deleat"

    save.addEventListener("click",()=>{
        //空欄は無視する
        if(input.value.trim()==="")return;

        //liを製作
        const li = document.createElement("li");

        //liの中にtextareaを作成（li.appendChild(textarea);でドッキング）
        const textarea = document.createElement("textarea");
        textarea.value = input.value;

        //消去ボタン
        const deleat = document.createElement('button');
        deleat.textContent = '消去';
        deleat.style.marginLeft = "10px";
        deleat.id = "deleteBtn";
        deleat.addEventListener("click", ()=>{
            li.remove();
        });

        li.appendChild(textarea);
        li.appendChild(deleat);
        inpStc.appendChild(li);

        input.value="";
    });
   