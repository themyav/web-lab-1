function sendRequest(clicked){
    if(clicked || (validate() && checkValue($('#R').val(), 2, 5, 1))){
        $.ajax({
            type: 'get',
            url:'php/script.php',
            data: {'X' : $('#X').val(), 'Y' : $('#Y').val(), 'R' : $('#R').val()},
            success:function(response){
                $(response).insertAfter($("#respTable > tbody > tr:first"));
                let tableCookie = "";
                for(let i = 2; i <= document.getElementById("respTable").rows.length; i++){
                    tableCookie += "<tr>" + $("#respTable > tbody > tr:nth-child(" + i + ")").html() + "</tr>";
                }
                document.cookie = "table=" + tableCookie.toString();
                document.getElementById('errorMessage').innerText = '';

            }
        });
    }
    else {
        document.getElementById('errorMessage').innerText = 'Проверьте корректность введенных значений!';
    }
}


$(document).ready(function(){

    $('#submit').click(function(){
        sendRequest(false);
    });

    $('#Y').on('input', function(){
        this.value = this.value.replace(/[^0-9.\-]/g, '');
    });

    $('#R').on('input', function(){
        this.value = this.value.replace(/[^0-9.]/g, '');
    });

    $('#graph').on('click', function (e){
        let x_pos = e.pageX - document.getElementById('graph').offsetLeft;
        let y_pos = e.pageY - document.getElementById('graph').offsetTop;
        let zero_x = document.getElementById('graph').offsetWidth / 2;
        let zero_y = document.getElementById('graph').offsetHeight / 2;

        let y_cord = -1 * (y_pos - zero_y), x_cord = (x_pos - zero_x), R = $('#R').val();
        if(checkValue(R, 2, 5, 1)){
            let w = R / 0.8;
            let k = w / zero_x;
            x_cord *=k;
            y_cord *=k;
            console.log(k + ' ' + x_cord + ' ' + y_cord);
            document.getElementById('errorMessage').innerText = '';
            document.getElementById('X').value=Math.round(x_cord.toFixed(4)).toString();
            document.getElementById('Y').value=y_cord.toFixed(4).toString();

            let X = $("#X").val();
            let Y = $("#Y").val();
            if(X == null || Y == null || !checkValue(X, -5, 3, 0) || !checkValue(Y, -3, 5, 0)) {
                document.getElementById('errorMessage').innerText = 'Значение X или Y в данной точке не корректно!';
            }
            else{
                sendRequest(true);
                restoreCanvas();
                drawPoint(x_pos,y_pos, '', ctx);
                document.getElementById('errorMessage').innerText = '';
            }
        }
        else{
            document.getElementById('errorMessage').innerText = 'Введите корректный R!';
        }
    });
});