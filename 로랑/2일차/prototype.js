//객체지향 언어 java,python (클래스 기반 객체지향) || javascript(프로토타입기반)

//prototype

// prototype llink 
// prototype object   이 2개를 합쳐서 프로토타입이라고 함 



// 오브젝트를 만들면 자동으로 프로토타입이 생김

//객체의 기반이 되는게 프로토타입임 

/* 함수는 무조건 객체로 취급 
객체를 생성할 때는 무조건 함수 */
/**/

function Human(){
   
}

console.log(Human)

var humanObj = new Human();
// new 는 Obj를 생성할 떄만 
//컨스트럭처는 

/*객체: 생성자 함수 , 프로토 obj,*/
// -------------------------------------------------------------------------------------------

//연습 js prototype exam  검색 항상 한줄씩 코드를 옮겨서 콘솔 확인

//파이썬 추천 !! 
//터미널에서 작동 백엔드 웹은 프론트 엔드
/*객체가 생성이 되려면 무조건 함수를 불러와서 생성을 한다.*/ 
/*프로토는 오브젝트로만 생성이 됨*/
/*자바스크립트에서 클래스는 없는 개념*/
/**/
class Human{  //class 프로토 타입을 좀 더 쓰기 쉽게 만듬
    constructor(){} //생성자함수

    add(){
        return a + b 
    }

}
/**/
/**/

function Human(){}


Human.prototype.name = 3;
Human.prototype.leg = 2;

var humanObj = new Human();
console.log(humanObj)

//humanObj 이란 애가 링크임 Human를 참조 그래서 속성을 가져다 사용 가능 

console.log(humanObj.name)
console.log(humanObj.leg)




/*
자바스크립트에 있는 모든 객체에서는 프로토타입이 이용가능
모든객체 안에는 프로토타입이 항상 있음
공통적으로 여러번 쓸 거 같은 애들을 프로토타입에 추가를 해서 여러번 쓸수있도록         / 프로토타입= 기반 /
*/
/* 재사용이 좋음 */
/**/



// 순수함수,일급함수,고차함수