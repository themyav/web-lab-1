$(document).ready(function(){

    $('#submit').click(function(){
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
            }
        });
    });

});