let XValues = [], YValues = [], RValues = [];

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
    let cookies = document.cookie.split('=');
    if(cookies.length > 1){
        let header = "<tr><th>X</th><th>Y</th><th>R</th><th>Результат</th><th>Время работы скрипта</th><th>Дата и время</th></tr>";
        console.log(document.cookie);
        document.getElementById("respTable").innerHTML = (header + cookies[1]).trim();
    }

}

function fillArray(arr, min, max){
    startTime();
    for(let i = min; i <= max; i++){
        arr.push(i.toString());
    }
}
function fillValues(){

    fillArray(XValues,-5, 3);
    fillArray(YValues, -3, 5);
    fillArray(RValues, 2, 5);
    fillTable();

}

function checkValue(value, arr){
    let ok = false;
    for(let i = 0; i < arr.length; i++){
        if(value === arr[i]) ok = true;
    }
    return ok;
}

function cleanTable(){
    let table = document.getElementById("respTable");
    while(table.rows.length > 1){
        table.deleteRow(1);
    }
    document.cookie = "table=;expires=" + new Date(0).toUTCString();
    console.log(document.cookie);
}

function colorError(id, ok){
    if(!ok){
        document.getElementById(id).style.backgroundColor = "lightpink";
    }
    else document.getElementById(id).style.backgroundColor = "white";
}

function validate(){
    let X = document.forms["OptionForm"]["X"].value;
    let Y = document.forms["OptionForm"]["Y"].value;
    let R = document.forms["OptionForm"]["R"].value;

    colorError("Y", checkValue(Y, YValues));
    colorError("R", checkValue(R, RValues));

    return checkValue(X, XValues) && checkValue(Y, YValues) && checkValue(R, RValues);

}