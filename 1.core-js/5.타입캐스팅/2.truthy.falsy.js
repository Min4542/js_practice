

if('')console.log('ok1');  //빈 문자열(empty string)
if(' ')console.log('ok2'); //공백 문자(space string)


if(undefined)console.log('ok3');
if(null)console.log('ok4');
if(567)console.log('ok5');
if(0)console.log('ok6');

if(NaN)console.log('ok7');
if([1,2,3])console.log('ok8');
if([])console.log('ok9');
if({})console.log('ok10');



console.log('===========================');

var orangeJuice=10;
if(orangeJuice){
    console.log('오랜지 주스 있다');
}else{
    console.log('오렌지 주스 있다.');
}
