
var x = 'global x'; //Ram에 지역변수와 전역변수 공간이 나뉘어져 있다. 


function outer(x){
    var y ='outer local y';
    console.log(x);
    console.log(y);

    function inner(){
        var x ='inner local x';
        var z = 'inner local z';
        console.log(x);
        console.log(y);
        console.log(z);
    }

    inner();
    console.log(x);
}//저장만 되고 실행은 안된다.
console.log(x);

outer('outer local x');//실행