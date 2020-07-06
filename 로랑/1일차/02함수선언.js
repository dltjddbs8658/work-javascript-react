function add(a,b){
    return a + b
}


add(5,6)
console.log(add(4,6))

addEventListener("click",function(){
    e.target
})

//함수는 무조건 동작을 해주거나 리턴값을 줘야함



function add2(c,d){
    return a + b
}
const result = add2(5,6);
console.log(result)

//함수가 값을 반환을 안하면 무조건 undefined가 뜸 

//주소를 받아서 돌아간다  == 제네레이터함수(반복기를 더 쉽게 작성할 수 있게하는)

//함수 그냥함수 

function main(){

}//함수 선언식 

var main = function(){

}//함수 표현식  위에거보다 이게 좋음 



// 호이스팅 변수가 맨위로 올라가는 현상 
main()
function main(){}
// 자바스크립은 위에서 아래로 실행인데  함수 선언식 잘 못 쓰면  호이스팅이 일어남 


 //es6
var main = () => {

}
