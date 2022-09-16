$(document).ready(function(){

    $('#submit').click(function(){
        $.ajax({
            type: 'get',
            url:'php/script.php',
            data: {'X' : $('#X').val(), 'Y' : $('#Y').val(), 'R' : $('#R').val()},
            success:function(response){
                $(response).insertAfter($("#respTable > tbody > tr:first"));
                //$("#respTable > tbody > tr:first").prepend(response);
                //alert($("respTable > tbody").html());
                document.cookie = "table=" + response.toString();
                console.log("i add " + response.toString());
            }
        });
    });

});