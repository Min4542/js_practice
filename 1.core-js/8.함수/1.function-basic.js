

//원의 넓이 : pi * r ** 2

//반지름이 5인 원의 넓이를 구해야 함
var circle1 = 3.14159 * 5 **2;
//반지름이 10
var circle1 = 3.14159 * 10 **2;
//반지름이 20
var circle1 = 3.14159 * 20 **2;

//////////////////다른작업 한 3만 줄//////////////////////////

//반지름이 100
var circle1 = 3.14159 * 100 **2;

//이러면 관리가 어렵다.




/////////////////////////////////////////////////////

//함수의 정의 
function calcAreaCircle(r) {
    var areaCircle = 3.14159 * r ** 2;
    return areaCircle;
}





//함수는 정의 만으로는 사용 못함
//함수의 호출
//반지름 5인 원의 넓이 
var result1 = calcAreaCircle(5);
console.log(`result: ${result1}`);

//반지름 10인
var result2 = calcAreaCircle(10);
console.log(`result: ${result2}`);

//////////////////////코드 3만줄 썻음////////////////

var result3 = calcAreaCircle(100);
console.log(`result: ${result3}`);


//함수 정의 방법 2
function add(n1,n2){
    return n1+n2;

}

var add2 = function(n1,n2) {
    return n1+n2;
}//익명 함수

add2(30,50);

//함수를 변수에 할당
var cac=calcAreaCircle;

cac(5);