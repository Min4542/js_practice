

//배열 생성
var fruits = ['딸기','포도','복숭아','사과'];

//배열의 길이 
console.log(`배열 요소 수:${fruits.length} `);

//배열 요소 참조
console.log(`배열의 3번째 요소: ${fruits[2]} `);
var apple = fruits[3];
console.log(`apple:${apple}`);

//배열 요소 수정
fruits[1] = '수박';
console.log(fruits);

//배열 요소 추가 
fruits[4] ='파인애플';//쓰면 안댐
fruits[5] ='망고';//쓰면 안댐
console.log(fruits);

//배열 요소 순회 (전체 참조)
for(var i=0; i<fruits.length; i++){
console.log(fruits[i]);
}