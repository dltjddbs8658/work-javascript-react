'usr strict' // 엄격모드   근데 여기서 typescript 를 많이 씀 
//에러 잡아줄 때 씀 

//리액트에 typescript 같이 쓰기 !! 
//내가 지정한 타입만 들어가도록 하는게 타입 스크립트 

const slideWrap = document.querySelector(".slide-box");
let wid = 1000;
let count = 0;

const autoslide = () => {
slideWrap.style.left =`-${wid * count}px`
   
    if(count === 2){return count = 0};

    //if문 한줄일 때는 같은줄에선 {} 안해도 ㄱㅊ
    
    count++;
}

//화살표 함수에서의 this는 최상위 객체를 가르킴 window같은거 
//이벤트에서는 이벤트 대상  그냥함수에서는 호출한 객체 나머지는 aerrow function 위에거

setInterval(autoslide,1000);

// `${자바스크립트 코드가 다 들어갈 수 있음 권장은 안함}`
//백틱을 쓰는이유 줄바꿈 인식 가능 

/*

ES6 => REACT + SCSS 
=> TCP/IP (https {get , post}) 이건 기본 개념만 ==> Webpack, babel,GuLf => 
리눅스 => aws, heroku, docker  번들러

*/



//XMLHTTP
// ajax
// axios
// fatch
//데이터를 비동기로 받아오는것
