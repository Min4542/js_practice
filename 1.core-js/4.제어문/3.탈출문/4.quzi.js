/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 프로그램 실행 시 0~100사이의 무작위 두 수의 합을 
   물어보는 문제가 지속적으로 출제되게 하세요.
2. 올바른 답을 입력할 시 “정답입니다”를 
   틀린 답을 입력할 시 “오답입니다”를 출력하세요.
3. 사용자가 0을 입력하면 문제 출제를 중단하고 
   누적된 정답 횟수와 오답횟수를 출력하세요.
*/

// var ansYesC = 0;
// var ansNoC = 0;
// while (true) {
//     var ranNum = Math.floor(Math.random() * 100) + 1
//     var ranNum1 = Math.floor(Math.random() * 100) + 1

//     var ran4 = Math.floor(Math.random() * 2)
//     var rn = Math.floor(Math.random() * 2)
//     var mark = rn === 0 ? "+" : "-"

//     var realAns;


//     var ans = +prompt(`${ranNum} ${mark} ${ranNum1} =`)
//     if (ranNum + ranNum1 === ans) {
//         alert('정답입니다.');
//         ansYesC++;
//     } else if (ans === 0) {
//         break;
//     } else {
//         alert('오답입니다.');
//         ansNoC++;
//     }

//     if(mark==="+")



//     alert(`오답 횟수:${ansNoC},정답 횟수:${ansYesC}`);

// }

/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 프로그램 실행 시 0~100사이의 무작위 두 수의 합을 
   물어보는 문제가 지속적으로 출제되게 하세요.
2. 올바른 답을 입력할 시 “정답입니다”를 
   틀린 답을 입력할 시 “오답입니다”를 출력하세요.
3. 사용자가 0을 입력하면 문제 출제를 중단하고 
   누적된 정답 횟수와 오답횟수를 출력하세요.
*/

//정오답 카운트 변수
var correct = 0, inCorrect = 0;

while (true) {
    
    var first = Math.floor(Math.random() * 101) + 1;
    var second = Math.floor(Math.random() * 101) + 1;

    //0과 1이 랜덤으로 등장하게 한후 0이면 +로, 1이면 -로 처리
    var rn = Math.floor(Math.random() * 2);
    var mark = rn === 0 ? '+' : '-';

    //사용자가 입력한 답
    var answer = +prompt(`${first} ${mark} ${second} = ??`);

    //프로그램 종료 조건
    if (answer === 0) break;

    //실제 정답
    var realAnswer;
    if (mark === '+') {
        realAnswer = first + second;
    } else {
        realAnswer = first - second;
    }

    // console.log(`real: ${realAnswer}`);
    // console.log(`input: ${answer}`);


    if (answer === realAnswer) {
        alert('정답입니다.');
        correct++;
    } else {
        alert('틀렸습니다.');
        inCorrect++;
    }

}//end while true

alert(`프로그램이 종료되었습니다.
\n# 정답 횟수: ${correct}회, 오답 횟수: ${inCorrect}회`);