//1~10까지의 누적 총합
var total = 0;
for (var n = 1; n <= 10; n++) {
    total += n;
}

console.log(`총합: ${total}`);

//1~100 사이의 정수 중 13의 배수 모두 출력하기
console.log('=============================');


for (var num = 1;num <= 100;num++) {
    if (num % 13 === 0) {
        console.log(num);
    }
}

// 1~100사이의 정수 중  6의 배수이면서 12의 배수가 아닌수 출력하기
console.log('=====================');



for (var num2 = 1;num2 <= 100;num2++) {
    if (num2 % 6 === 0 && num2 % 12 !== 0) {
        console.log(num2);
    }
    
}

// 1~4000 사이의 정수 중 9의 배수의 개수를 출력하기
console.log('=====================');


var count = 0;

for (var num3 = 1;num3 <= 4000;num3++) {
    if (num3 % 9 === 0) {
        count += 1;
    }
    
}
console.log(`범위 내의 9의 배수의 개수: ${count}개`);