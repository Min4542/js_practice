
for(var i = 1; i<=10; i++){
    if(i%2===0)continue;
    console.log(i);
}

console.log(`반복문 종료!`);

//continue는 아래있는 코드를 스킵하고 증감식으로 돌아감 for문 일경우

while(true){
    var n = +prompt('숫자를 입력하세요');
    if(n===0){
        break;
    }else if(n ===1){
        continue;
    }
    alert('안녕안녕');
}
alert('반목문 끝')

//while일 경우 while바로 아래로 넘어감  