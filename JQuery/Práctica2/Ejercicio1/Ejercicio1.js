
$(document).ready(function (){
    $("#show").click(function (){
        $.ajax({
        url:"txt/texto.txt",
        success: function (response) {
        $("#miDiv").html(response)
    }
    });
});
});