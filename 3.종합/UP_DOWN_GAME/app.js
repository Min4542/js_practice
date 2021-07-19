
//게임에 필요한 데이터 객체
const gameDatas = {
    secret: Math.floor(Math.random()*100)+1,
    min: 1,
    max:100
};

//함수 정의부
//숫자 아이콘 생성 함수
function makeNumberIcons(){
    
    const $numbers = document.getElementById('numbers');
    const $frag = document.createDocumentFragment();

    //아이콘 i개 만들기
    for(let i=1;i<=100;i++){
    const $icon = document.createElement('div');
    $icon.classList.add('icon');
    $icon.textContent = i;
    $frag.appendChild($icon);
    }
    $numbers.appendChild($frag)
}

//메인 실행부
(function(){
    //아이콘 배치 함수 호출 
    makeNumberIcons();
})();