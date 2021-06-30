







// 비교뿐만이 아니라 타입도 체크해서 같아야 true로 판단
console.log("===============================");
console.log(5===5);
console.log(5=='5');

// 동등 비교 (==,!=)는 결과 예측이 명시적으로 쉽지 않으므로 사용하지 않는 것을 추천 
console.log("=====================");
console.log('0' == ''); //falsr
console.log(0 == ''); //true
console.log('0'==0); //true
console.log(false=='false');//false
console.log(false=='0'); //true

// 대소 비교
console.log("=============================");

var x=10;
console.log(x>5);
console.log(x<=10);


// 문자열 대소 비교 
console.log("====================");

console.log('apple'==='APPLE'); //false

console.log('ace'<'ade');//true
console.log('복숭아'<'감자');//fasle

/*

문자열 대소 비교는 같은 문자(영어소문자, 한국어,일본어 등)일 경우 사전에서 뒤에 나오는 단어일수록 크다고 판단됨.

단 유니코드 숫자 크기로 비교하므로 영문 대문자< 영문 소문자 < 한글

==을 쓰지 마라 ===을 써라

*/


// uni code 2~3byte  65536개
// 가~힣  



