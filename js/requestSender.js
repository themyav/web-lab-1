$(document).ready(function(){

    $('#submit').click(function(){
        $.ajax({
            type: 'get',
            url:'php/script.php',
            data: {'X' : $('#X').val(), 'Y' : $('#Y').val(), 'R' : $('#R').val()},
            success:function(response){
                $("#respTable > tbody").append(response);
            }
        });
    });

});