//const changeface=document.getElementById('face')
const emoji = ['😂', '😍', '🤣', '😢', '😊', '😆', '😃', '😄', '😉', '🤗', '🤩', '🤗', '🤔', '🤨', '🙄']
const face1 = document.querySelector('#face');
const buto = document.querySelector('button');
buto.addEventListener("click", () => {
    let round = Math.floor(Math.random() * 15);
    let result = emoji[round];
    face1.textContent = result;
});
console.log(emoji.length)