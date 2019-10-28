
var conect = new XMLHttpRequest();
conect.open('POST', 'https://eyavqewaud.execute-api.ap-northeast-1.amazonaws.com/production/animals', true);


var form = document.getElementById('form');

form.addEventListener("submit", function (e) {

    e.preventDefault();
    var data = new FormData(form);

    
})