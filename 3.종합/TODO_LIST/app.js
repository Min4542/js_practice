//전역 변수 
const todos = [{
        id: 1,
        text: '할 일 1',
        done: false
    },
    {
        id: 2,
        text: '할 일 2',
        done: false
    },
    {
        id: 3,
        text: '할 일 3',
        done: false
    }
];


///////////////////////////////

//함수 정의부
//추가될 새로운 할 일의 신규 아이디를 만들어서 리턴하는 함수
function makeNewId() {

    // const lastObject = todos[todos.length - 1];
    // console.log(lastObject.id);
    // return lastObject.id+1;

    if (todos.length > 0) {
        return todos[todos.length - 1].id + 1 //데이터가 1이상 있을때 유용함
    } else { //기존 데이터가 한개도 없을 경우
        return 1;
    }
};

//새 할 일을 화면에 렌더링하는 함수
function renderNewTodo(newTodo) {
    const $li = document.createElement('li');
    $li.dataset.id = newTodo.id;
    $li.classList.add('todo-list-item');

    const newElement =
        `<label class="checkbox">
    <input type="checkbox">
    <span class="text">${newTodo.text}</span>
</label>
<div class="modify"><span class="lnr lnr-undo"></span></div>
<div class="remove"><span class="lnr lnr-cross-circle"></span></div>

`;
    $li.innerHTML = newElement;

    const $toDoList = document.querySelector('.todo-list');
    $toDoList.appendChild($li);

};

//할 일의 내용이 잘 입력되었는지 검사하는 함수
function validateInputText($targetInput) {
    //trim():  문자열의 앞뒤 공백을 제거
    if ($targetInput.value.trim() === '') {
        $targetInput.style.background = 'red'
        $targetInput.setAttribute('placeholder', '필수 입력사항입니다.')
        $targetInput.value = '';
        return false;
    } else {
        $targetInput.style.background = ''
        $targetInput.setAttribute('placeholder', '할 일을 입력하세요')
        return true;
    }
};
//할 일 추가 기능 처리 함수 
function insertTodoData() {
    const $todoText = document.getElementById('todo-text');

    //입력값 검증 

    if (!validateInputText($todoText)) return
    //1.데이터 처리: 필요한 데이터를 생성하여 todos배열에 추가
    const newTodo = {
        id: makeNewId(),
        text: $todoText.value,
        done: false
    };
    todos.push(newTodo);
    // console.log(newTodo);
    // console.log(todos);

    //2. 추가된 데이터를 화면에 렌더링
    renderNewTodo(newTodo);

    //3.입력 완료 후 input창 텍스트 지우기
    $todoText.value = '';
};

//data-id값으로 배열을 탐색하여 아이디가 일치하는 객체의 인덱스를 반환
function findIndexByDataId(dataId) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === dataId) {
            return i;

        }
    }
    return null; //탐색 실패 증거로 null을 반환
}
//할 일 완료 처리 함수 정의
function changeCheckState($label) {
    /*
        1.체크가 된 label태그에 checked클래스를 추가해야 함.
        2.이 함수에는 체크가 된 label태그의 정보가 필요함
        3.이 label태그는 이벤트 핸들러가 알고 있음
    */
    $label.classList.toggle('checked');
    /* 
        4.문제상황: CSS만 변했지 실제 데이터(done)는 변하지 않음.
        5.만약 서버가 있었다면 서버에 완료상태를 반영해줘야 함
        6.todos배열의 객체의 접근해서 done값을 변경해줘야 함
        7.만약에 두번째 체크박스를 선택했다면 todos배열의 1번 인덱스의 
        done값을 수정해야 한다.
        8.label태그의 정보를 알고있다면 그 부모태그 li에 접근할 수 있고 
        그 태그의 data-id속성을 조회하면 객체의 id값을 얻을 수 있음
    */
    // console.log($label.parentNode.dataset.id);
    const dataId = +$label.parentNode.dataset.id;

    /*
    9. id값을 기반으로 배열을 탐색하여 data-id와 일치하는 
    id 프로퍼티를 가진 객체가 있는 인덱스를 찾아야 함.
    */
    const idx = findIndexByDataId(dataId);
    // console.log(`idx:${idx}번`);
    //10.찾은 인덱스러 해당 객체에 접근해서 done값을 수정
    if (idx !== null) {
        todos[idx].done = !todos[idx].done;
    }
    // console.log(todos);
};

//할 일 삭제 처리 함수
function removeToDoData($delTarget) {
    //1. 삭제 대상 li태그를 ul에서 제거해야 함
    const $ul = document.querySelector('.todo-list');
    $ul.removeChild($delTarget)

    //2. todos배열에서 해당 객체 삭제 
    const delIdx = findIndexByDataId(+$delTarget.dataset.id);
    todos.splice(delIdx, 1);
    console.log(todos);
}

//할 일 수정모드 진입 이벤트 처리 함수
function enterModifyMode($modSpan){

    //버튼 모양을 교체(클래스 교체)
    $modSpan.classList.replace('lnr-undo','lnr-checkmark-circle');

    //텍스트 span을 input:text로 교체
    const $label = $modSpan.parentNode.previousElementSibling;
    // console.log($parent);
    const $textSpan =$label.lastElementChild;

    const $modInput = document.createElement('input');
    $modInput.setAttribute('type','text');
    $modInput.setAttribute('value',$textSpan.textContent);
    $modInput.classList.add('modify-input');


    
    $label.replaceChild($modInput,$textSpan)

}

//할 일 수정 완료 이벤트 처리 함수
function modifyToDoData($checkSpan){

    //버튼 모양을 원래대로 되돌림
    $checkSpan.classList.replace('lnr-checkmark-circle','lnr-undo');

    //input:text를 span.text로 교체
    const $label = $checkSpan.parentNode.previousElementSibling;
    const $modInput = $label.lastElementChild;

    const $newSpan = document.createElement('span');
    $newSpan.classList.add('.text');
    $newSpan.textContent=$modInput.value



    $label.replaceChild($newSpan,$modInput)

    //배열 데이터 수정
    const idx= findIndexByDataId(+$label.parentNode.dataset.id);
    todos[idx].text= $newSpan.textContent;

    console.log(todos);
}


//////////////////////////////

//메인 실행부
(function () {
    // 할 일 추가 이벤트
    const $addBtn = document.getElementById('add');

    $addBtn.addEventListener('click', e => {
        e.preventDefault(); //submit 전송기능 중단
        // console.log('추가 버튼 클릭');

        insertTodoData();
    });

    //할 일 완료(체크박스) 이벤트
    const $todoList = document.querySelector('.todo-list');
    $todoList.addEventListener('change', e => {

        if(!e.target.matches('.checkbox input[type=checkbox]'))return;
        // console.log('체크박스 체인지 이벤트 발생!');

        // console.log(e.target.nextElementSibling);


        // console.log(e.target.parentNode);
        //체크박스에 변화가 생겼을 때 CSS변동 처리 함수 호출
        changeCheckState(e.target.parentNode);
    });
    //할 일 삭제버튼 클릭 이벤트
    $todoList.addEventListener('click', e => {

        if (!e.target.matches('.remove span')) return;

        // console.log('삭제버튼 클릭 됨 ',e.target);
        // console.log(e.target.parentNode.parentNode);

        removeToDoData(e.target.parentNode.parentNode);
    })



    //할 일 수정 이벤트 (수정모드진입,수정 완료)
    $todoList.addEventListener('click', e => {

        //이벤트 발생 요소가 수정모드진입버튼이라면 
        if (e.target.matches('.modify span.lnr-undo')) {
            console.log(e.target);
            enterModifyMode(e.target);

        }else if(e.target.matches('.modify span.lnr-checkmark-circle')){
            modifyToDoData(e.target);

        }else{

        }
    });

})();