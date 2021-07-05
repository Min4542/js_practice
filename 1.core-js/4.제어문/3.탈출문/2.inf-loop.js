/* 1~10까지의 랜덤 정수를 반복해서 출력하는데 
만약 랜덤 정수가 6이 나오면 그만할거다. */


while(true){
    var rn = Math.floor(Math.random() * 10) + 1;
    if(rn === 6)break;
    console.log(rn);
}