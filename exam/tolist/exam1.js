let arr = [];
const add1 = document.querySelector('#add');
const del1 = document.querySelector('#del');



function add(){
const textBox = document.querySelector('#text');
const text = textBox.value;
const textCon = document.querySelector('.text_box');
const btnX = document.createTextNode('X');

arr.push(text);
console.log(arr);


for(let i = 0;i < arr.length;i++){
const li = document.createElement('li');
const text2 = document.createTextNode(arr[i])
const btn = document.createElement('button');

li.appendChild(text2);
textCon.appendChild(li);
li.appendChild(btn);
btn.appendChild(btnX);
btn.style.height = '20px';
textBox.value = '';

}

if(arr.length < textCon.childNodes.length){
    arr = []
}


};

function del(){
    const textBox = document.querySelector('#text');

 
}