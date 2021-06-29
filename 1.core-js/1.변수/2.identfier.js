// 식별자: 데이터를 구분하기 위한 고유의 이름(변수 이름,함수이름...)

// 1.대소문자를  구분할 것
var banana='바나나';
var BANANA='뻐네이너';
var Banana='빠나아나';

// 숫자로 시작하면 안된다.
// var 7=99;  (x)
// var 99haha=100;(x)
var number3=3;
var haha66haha=100;

// 특수문자는 _,$외 사용금지
// var my-name='홍길동';(x)
// var hello!='안녕';(x)
var my_name='홍길동';
var $grape='포도';

// 띄어쓰기 불가능
// var user phone number='010-1234-1234';
var userphonenumber=11;
// 관례:convention
var user_phone_number =1;//snake case:python
var userPhoneNumber=1;//camel case:js추천,java
var UserPhoneNumber=1;//pascal case:클래스 이름

// Hungarian case:변수명 앞에 데이터의 모양을 표기
var strName ='홍길동';
var numPoint = 78;

//변수이름은 구체적이고 명확하며 일관되게 지어라 
// ex:회원정보 저장
var a='홍길동'; // var userName;
var z='dsdwdssdas'; //var userPassword;
var xu='dsdwdsdwgegd'; //var userAccount;
var p="dsdwfgegb"; //var userEmail;

//키워드는 식별자 이름으로 사용 불가능
// var var;(x)
// let for;(x)
