var height = +prompt('당신의 키는?');

if (height >= 140) {
    var age = +prompt('당신의 나이는?');
    if (age >= 8) {
        alert('놀이기구에 탈 수 있습니다.');
    } else {
        alert('놀이기구 못타요~');
    }
} else {
    alert('키가 작아서 놀이기구에 탈 수 없어요~');
}
alert('좋은 하루되 세용');