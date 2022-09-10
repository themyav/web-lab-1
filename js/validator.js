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
    if (i < 10) {i = "0" + i;}  // add zero in front of numbers < 10
    return i;
}

function feelArray(arr, min, max){
    startTime();
    for(let i = min; i <= max; i++){
        arr.push(i.toString());
    }
}
function feelValues(){

    feelArray(XValues,-5, 3);
    feelArray(YValues, -3, 5);
    feelArray(RValues, 2, 5);

}

function checkValue(value, arr){
    let ok = false;
    for(let i = 0; i < arr.length; i++){
        if(value === arr[i]) ok = true;
    }
    return ok;
}

function validate(){
    console.log('Hello')
    //alert("aaa");
    let X = document.forms["OptionForm"]["X"].value;
    let Y = document.forms["OptionForm"]["Y"].value;
    let R = document.forms["OptionForm"]["R"].value;

    console.log(X);
    console.log(Y);
    console.log(R);
    console.log(checkValue(X, XValues));

    if(checkValue(X, XValues) && checkValue(Y, YValues) && checkValue(R, RValues)){
        console.log("Корректные данные");
        return false;
    }
    else{
        console.log("Некорректные данные");
        return false;
    }

}