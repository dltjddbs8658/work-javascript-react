let arr = []

function add(){
const text = document.querySelector('#text');
const textVal =  text.value;
arr.push(textVal);
console.log(arr);
let textBox = document.querySelector('.text_box');

// console.log('tt',textBox.children)
// console.log('ch',textBox.childNodes)
console.log('qqe',textBox.hasChildNodes())
if(textBox.childNodes.length > 0) {
    
    // for(let j = 0; j < textBox.children.lengths; j++) {
    //     textBox.removeChild(textBox.childNodes[j])
    // }
    while(textBox.hasChildNodes()) {
        textBox.removeChild(textBox.firstChild);
    };
    console.log('awda', textBox.children);
};
let div = [];

for(let i = 0; i < arr.length; i++){
    
    const li = document.createElement('li');
    const text2 = document.createTextNode(arr[i])
    li.appendChild(text2);

    div.push(li);
    // textBox.appendChild(li);

    // li.innerHTML(String(arr[i]))
    // console.log(arr[i])
}  
console.log('div',div);
for(let j = 0; j < div.length; j++) {
    textBox.appendChild(div[j])
};
// const li = document.createElement('li');
// const span = document.createElement('span');
// const textbox1 = textBox.appendChild(li);
// textbox1.appendChild(span);
// span.innerText = textVal ;

}


function del(){
    let textBox = document.querySelector('.text_box');
    while(textBox.hasChildNodes()) {
        textBox.removeChild(textBox.firstChild);
    };
    // for(let i = 0; i < arr.length; i++) {
    //     arr.splice(i,0)
    // }
    arr = []
}