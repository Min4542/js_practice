var foods=['떡볶이','오뎅','김말이','닭꼬치'];

//indexOf() : 배열 요소의 인덱스를 알려줌
//탐색 실패시 -1을 반환
var idx = foods.indexOf('오뎅');
console.log(`찾은 인덱스:${idx}`);

//inclides() : 배열 요소의 존재 유무 확인
var result=foods.includes('김말이');
console.log(`탐색 결과:${result}`);

//slice() : 배열을 잘라내어 복사함
console.log('======================');

var arr = [0,1,2,3,4,5,6,7,8,9];

//start이상 end미만
var slicedarr=arr.slice(2,7);
console.log(slicedarr);

//원본배열은 변하지 않음
console.log(arr);

//6번부터 끝까지 추출
slicedarr = arr.slice(6);
console.log(slicedarr);

//reverse() : 배열을 역순으로 배치함 , 단 원본이 변화함
console.log('======================');


// arr.reverse();
// console.log(arr);

//원본을 변화시키지 않고 역순 정렬하려면 복사본을 이용
var copyArr = arr.slice(0);
copyArr.reverse();

//join() : 배열의 요소들을 연결된 문자열을 변환 문자 사이에 삽입
var foodStr = foods.join();
console.log(foodStr);

//concat() : 배열을 연결 
var concatedArr=arr.concat([100,200,300]);
console.log(concatedArr);