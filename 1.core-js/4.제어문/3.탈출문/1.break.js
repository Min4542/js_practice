for (var i = 1; i <= 10; i++) {
    if (i > 5)
        break;

    console.log(i);
}
console.log(`반복문 종료!`);


console.log('======================');

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 2; j++) {
        if (i === j) break;
        console.log(`${i},${j}`);
    }
}
//break는 제일 가까운 반복문만 탈출한다.

//for문은 반복 횟수를 정확하게 알면 while문보다 효율적이다. 