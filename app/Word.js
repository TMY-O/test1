const auther = document.getElementById('auther');
const word = document.getElementById('word');
const run = document.getElementById('run');


run.addEventListener("click", ()=>{
fetch('https://meigen.doodlenote.net/api/json.php?c=1&e=1')
 .then(response => response.json())
 .then(data=>{
    auther.textContent = data[0].auther;
    word.textContent= data[0].meigen;
 })
 .catch(error =>{
    auther.textContent="取得に失敗しました";
    word.textContent="取得に失敗しました";
    console.error("取得に失敗しました",error); 
 });
});