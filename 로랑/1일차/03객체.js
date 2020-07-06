//object
// 예전에는 new Object();나
// new Date() 같은 내장객체 사용 
const a = new Object();
console.log(a);

function Man(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

const man = new Man("이름","나이","성별")
//------------------------
const a = {
    name:"name",
    val:"val"
}

//프로토타입기반의 객체지향언어

//내가 뭔가를 만들어야하는데 
//이름만 다르고 기능이 똑같은 경우가 있음 여러번 반복적으로 기능 수행을 하지 않기 위해서 
//코드를 줄이려고  

//정석으로는 함수 한개당 기능 한개임 

