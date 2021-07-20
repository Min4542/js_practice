//게임에 필요한 데이터 객체
const gameDatas = {
    secret: Math.floor(Math.random() * 100) + 1,
    min: 1,
    max: 100
};

//함수 정의부

//기존 아이콘 전체삭제 함수
function clearAllIcons($numbers) {
    for (let $icon of [...$numbers.children]) {
        $numbers.removeChild($icon);
    }
};

//숫자 아이콘 생성 함수
function makeNumberIcons(isClear = false) {

    const $numbers = document.getElementById('numbers');
    console.log($numbers);
    const $frag = document.createDocumentFragment();
    if (isClear) {
        clearAllIcons($numbers);
    }

    //아이콘 i개 만들기
    for (let i = gameDatas.min; i <= gameDatas.max; i++) {
        const $icon = document.createElement('div');
        $icon.classList.add('icon');
        $icon.textContent = i;
        $frag.appendChild($icon);
    }
    $numbers.appendChild($frag)
};
//updown 애미메이션 클래스 처리 함수
function updownanimaition(isUP) {
    const ANI_CLASS_NAME = 'selected';
    const [$up, $down] = [...document.querySelector('.result').children];
    if (isUP) {
        $down.classList.remove(ANI_CLASS_NAME);
        $up.classList.add(ANI_CLASS_NAME);
    } else {
        $up.classList.remove(ANI_CLASS_NAME);
        $down.classList.add(ANI_CLASS_NAME);
    }
}


//updown인 경우 처리할 내용을 정의하는 함수
function processUpDownCase(isUP) {
    if (isUP) {
        //up인 경우
        gameDatas.min = gameDatas.answer + 1
        document.getElementById('begin').textContent = gameDatas.min;


    } else {
        //최대값 갱신
        gameDatas.max = gameDatas.answer - 1;
        //html에 숫자테스트에 #end에 최대값 넣기
        document.getElementById('end').textContent = gameDatas.max;
    }
    //updown아이콘 애니메이션 처리
    updownanimaition(isUP);
    //아이콘 갱신
    makeNumberIcons(true);
}

//정답을 맞췄을 때 처리함수
function  processCorrect($target){
    //축하박스 애니메이션 처리
    const $finish = document.getElementById('finish');
    $finish.classList.add('show');

    
   
   $target.setAttribute('id','move');


}

//클릭된 숫자를 판별해 결과를 알려주는 함수
function checkAnswer($target) {

    const {
        secret,
        answer
    } = gameDatas;

    if (secret === answer) { //정답인 경우
        processCorrect($target);
    } else if (secret < answer) { //down인 경우
        processUpDownCase(false);
    } else { //up인 경우
        processUpDownCase(true);
    }
}

//메인 실행부
(function () {
    //아이콘 배치 함수 호출 
    makeNumberIcons();

    //아이콘 클릭 이벤트 
    const $numbers = document.getElementById('numbers');
    $numbers.addEventListener('click', e => {

        //클릭이벤트 아이콘으로 제한
        if (!e.target.matches('#numbers .icon')) return;

        // console.log(e.target.textContent);
        gameDatas.answer = +e.target.textContent;
        // console.log(gameDatas);

        //정답 체크 함수 호출
        checkAnswer(e.target);
    });


})();