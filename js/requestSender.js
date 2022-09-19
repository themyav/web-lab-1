$(document).ready(function(){

    $('#submit').click(function(){
        if(validate()){
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
                    console.log(document.cookie);
                }
            });
        }
        else{
            alert('Проверьте корректность введенных значений!');
        }
    });

    $('#Y').on('input', function(){
        this.value = this.value.replace(/[^0-9.\-]/g, '');
    });

    $('#R').on('input', function(){
        this.value = this.value.replace(/[^0-9.]/g, '');
    });
});