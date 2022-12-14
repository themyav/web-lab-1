function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  "Текущее время: " + h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function fillTable(){
    let cookies = document.cookie.split(';'), i = 0;
    while(i < cookies.length && cookies[i].toString().search('table') === -1) {
        i++;
    }
    console.log(cookies[i]);
    if(i < cookies.length){

        let header = "<tr><th>X</th><th>Y</th><th>R</th><th>Результат</th><th>Время работы скрипта</th><th>Дата и время</th></tr>";
        document.getElementById("respTable").innerHTML = (header + cookies[i].split('=')[1]).trim();
    }

}

function fillValues(){
    fillTable();
    startTime();

}

function checkValue(value, min, max, positive){
    let ok = (value.search(/^-?\d\.?\d{0,5}$/) !== -1 && Number(value) >= min && Number(value) <= max);
    if(positive && value.search("-") !== -1) ok = false;
    return ok;
}

function cleanTable(){
    restoreCanvas();
    let table = document.getElementById("respTable");
    while(table.rows.length > 1){
        table.deleteRow(1);
    }
    document.cookie = "table=;expires=" + new Date(0).toUTCString();
    console.log(document.cookie);
}

function colorError(id, ok){
    console.log(id + " " + ok);
    if(!ok){
        document.getElementById(id).style.backgroundColor = "lightpink";
    }
    else document.getElementById(id).style.backgroundColor = "white";
}


function validate(){
    let X = document.forms["OptionForm"]["X"].value;
    let Y = document.forms["OptionForm"]["Y"].value;
    let R = document.forms["OptionForm"]["R"].value;

    colorError("Y", checkValue(Y, -3, 5, 0));
    colorError("R", checkValue(R, 2, 5, 1));

    return checkValue(X, -5, 3, 0) && checkValue(Y, -3, 5, 0) && checkValue(R, 2, 5, 1);

}
